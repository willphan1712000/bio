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

    public function __construct(Request $request, Response $response)
    {
        $this->request = $request;
        $this->response = $response;

        $this->woocommerce = new Client(
            // SystemConfig::globalVariables()['company_domain'],
            'https://card.aiccards.com',
            $_ENV["WOO_KEY"],
            $_ENV["WOO_SECRET"],
            [
                'version' => 'wc/v3',
            ]
        );
    }

    public function getAll()
    {
        $products = $this->woocommerce->get("products");
        return $this->response->setStatusCode(200)->json($products);
    }

    public function getWithId($id)
    {
        $products = $this->woocommerce->get('products/' . $id);
        return $this->response->setStatusCode(200)->json($products);
    }
}
