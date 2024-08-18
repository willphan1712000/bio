<?php

interface ITemplateManagement {
    public static function isPurchased($username, $tem);
    public static function shareTemplate($username, $tem);
    public static function isAbleToPurchase($isSignedIn, $username, $itemid);
}

class TemplateManagement implements ITemplateManagement {
    public static $totalTemplate = Template::TOTAL;
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
        if($itemid <= 0 || $itemid > self::$totalTemplate) {
            return false;
        }
        if(self::isPurchased($username, $itemid) && $isSignedIn) {
            return false;
        }
        return true;
    }
}