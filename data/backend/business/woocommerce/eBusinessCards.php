<?php

namespace business\woocommerce;

class eBusinessCards extends ProductController
{
    public function __construct(...$args)
    {
        parent::__construct(...$args);
    }

    public function getAll()
    {
        $eBussinessCards = [
            "products" => [
                $this->woocommerce->get('products/2648'),
                $this->woocommerce->get('products/2358'),
                $this->woocommerce->get('products/2354'),
                $this->woocommerce->get('products/2347'),
                $this->woocommerce->get('products/2343')
            ]
        ];

        $this->response->setStatusCode(200)->json($eBussinessCards);
    }
}
