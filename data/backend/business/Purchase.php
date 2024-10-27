<?php
namespace business;

require_once __DIR__.'/../../../vendor/autoload.php';
use persistence\API;
interface IPurchase {
    public static function purchaseProcessing(string $username, array $items):bool;
}

class Purchase implements IPurchase {
    private static function purchase($data) : bool {
        return API::POST("purchase", $data);
    }
    
    private static function style($item, $data): bool {
        return API::POST("style", array_merge($data, TemplateManagement::getStyle($item)));
    }

    private static function template($username, $item): bool {
        return API::PUT("template", "themeid", $item, "username='$username'");
    }

    public static function purchaseProcessing(string $username, array $items) : bool {
        foreach ($items as $item) {
            $data = [
                'purchase_id' => time() + $item->id,
                'username' => $username,
                'template_id' => $item->id
            ];
            self::purchase($data);
            self::style($item->id, $data);
        }
        return self::template($username, $items[0]->id);
    }
}