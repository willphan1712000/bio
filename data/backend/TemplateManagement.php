<?php
interface ITemplateManagement {
    public static function getTotal();
    public static function getProducts();
    public static function getStyle($id);
    public static function isPurchased($username, $tem);
    public static function shareTemplate($username, $tem);
    public static function isAbleToPurchase($isSignedIn, $username, $itemid);
}

class TemplateManagement implements ITemplateManagement {
    public static function getTotal() {
        $r = Database::executeQuery("SELECT COUNT(*) AS total FROM templateInfo");
        $TOTAL = $r['data'][0]['total'];
        return $TOTAL;
    }

    public static function getProducts() {
        $r = Database::executeQuery("SELECT * FROM templateInfo");
        $data = $r['data'];
        $product = [];
        $product[] = "basic";
        foreach($data as $i => $c) {
            $arr = [];
            $arr['id'] = $c['id'];
            $arr['name'] = $c['name'];
            $arr['price'] = $c['price'];
            $arr['image'] = $c['image'];
            $arr['description'] = $c['description'];

            $product[] = $arr;
        }

        return $product;
    }

    public static function getStyle($id) {
        $r = Database::executeQuery("SELECT * FROM templateInfo");
        $data = $r['data'];
        $target = $data[$id - 1];
        $style = [];
        $style['font'] = $target['font'];
        $style['fontSize'] = $target['fontSize'];
        $style['fontColor'] = $target['fontColor'];
        $style['background'] = $target['background'];

        return $style;
    }

    public static function isPurchased($username, $tem) {
        $isPurchased = API::GET("purchase", null, "username='$username'AND template_id=$tem");
        if(!empty($isPurchased)) {
            return true;
        }
        return false;
    }

    // This function will check if user shares a template. If template was purchased, it would be themeid. Otherwise, it would redirect user to the main user page
    public static function shareTemplate($username, $tem) {
        $chosen = API::GET("template", "themeid", "username='$username'");
        if($tem !== null) {
            if(self::isPurchased($username, $tem)) {
                return $tem;
            }
            return $chosen;
        } else {
            return $chosen;
        }
    }

    public static function isAbleToPurchase($isSignedIn, $username, $itemid) {
        if($itemid === null) {
            return true;
        }
        if($itemid <= 0 || $itemid > self::getTotal()) {
            return false;
        }
        if(self::isPurchased($username, $itemid) && $isSignedIn) {
            return false;
        }
        return true;
    }
}