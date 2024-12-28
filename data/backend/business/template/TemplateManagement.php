<?php

namespace business\template;

use persistence\Database;
use persistence\Entity\User;
use persistence\Entity\Style;
use business\user\UserManagement;
use persistence\Entity\StyleDefault;

interface ITemplateManagement
{
    public static function getTotal();
    public static function getProducts();
    public static function isPurchased(string $username, int $tem);
    public static function shareTemplate($username, $tem = NULL): int;
    public static function isAbleToPurchase($SESSION, $username, $itemid);
}

class TemplateManagement implements ITemplateManagement
{
    public static function getTotal()
    {
        $r = Database::SQL("select total from counttemplate");
        return $r[0]['total'];
    }

    public static function getProducts()
    {
        $products = Database::GET(StyleDefault::class);
        $productArr = [];

        foreach ($products as $product) {
            $productProps = [];
            $productProps['template_id'] = $product->get('template_id');
            $productProps['name'] = $product->get('name');
            $productProps['image'] = $product->get('image');
            $productProps['description'] = $product->get('description');
            $productProps['font'] = $product->get('font');
            $productProps['fontSize'] = $product->get('fontSize');
            $productProps['fontColor'] = $product->get('fontColor');
            $productProps['background'] = $product->get('background');
            $productProps['price'] = $product->get('price');

            array_push($productArr, $productProps);
        }

        return $productArr;
    }

    public static function isPurchased(string $username, int $tem)
    {
        try {
            $isPurchased = Database::GET(Style::class, null, [
                'username' => $username,
                'template_id' => $tem
            ]);
            return [
                'success' => true
            ];
        } catch (\Exception $e) {
            return [
                'success' => false,
                'error' => $e->getMessage()
            ];
        }
    }

    // This function will check if user shares a template. If template was purchased, it would be themeid. Otherwise, it would redirect user to the main user page
    public static function shareTemplate($username, $tem = NULL): int
    {
        $chosen = Database::GET(User::class, 'defaultTemplate', ['username' => $username]);
        if ($tem !== NULL) {
            if (self::isPurchased($username, $tem)['success']) {
                return (int) $tem;
            }
            return (int) $chosen;
        } else {
            return (int) $chosen;
        }
    }

    public static function isAbleToPurchase($SESSION, $username, $itemid): bool
    {
        // Check if user exists, return true if exists. Return false otherwise
        if (!UserManagement::isUserExist($username)) {
            return false;
        }
        // Check if user is already signed in or not
        if (!UserManagement::isSignedIn($SESSION, $username)) {
            return false;
        }
        // Check if itemid is null or not
        if ($itemid === null) {
            return true;
        }
        // Check if itemid is out of bound or not
        if ($itemid <= 0 || $itemid > self::getTotal()) {
            return false;
        }
        // Check if itemid is already purchased or not. If already purchased, return false
        if (self::isPurchased($username, $itemid)['success']) {
            return false;
        }
        return true;
    }
}
