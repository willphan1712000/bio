<?php

namespace business\woocommerce;

use api\Request;
use api\Response;
use Automattic\WooCommerce\Client;
use config\SystemConfig;

class ProductController
{
    protected Request $request;
    protected Response $response;
    protected $woocommerce;
    protected const EBUSINESS_CATEGORY_ID = 115;

    public function __construct(Request $request, Response $response)
    {
        $this->request = $request;
        $this->response = $response;

        $this->woocommerce = new Client(
            SystemConfig::globalVariables()['company_domain'],
            $_ENV["WOO_KEY"],
            $_ENV["WOO_SECRET"],
            [
                'version' => 'wc/v3',
            ]
        );
    }

    public function getAll()
    {
        $id = self::EBUSINESS_CATEGORY_ID;
        $products = [
            "products" => $this->woocommerce->get("products?category=$id")
        ];
        $this->response->setStatusCode(200)->json($products);
    }

    public function getWithId($id)
    {
        $products = $this->woocommerce->get('products/' . $id);
        return $this->response->setStatusCode(200)->json($products);
    }
}
