<?php

class InfoProcess extends SystemConfig {
    private $info;

    public function __construct($info) {
        $this->info = $info;
    }
    // Detect device type, "Desktop" or "Mobile"
    private function getDeviceType() {
        $userAgent = $_SERVER['HTTP_USER_AGENT'];
    
        if (preg_match('/mobile/i', $userAgent)) {
            return 'Mobile';
        } elseif (preg_match('/tablet/i', $userAgent)) {
            return 'Tablet';
        } else {
            return 'Desktop';
        }
    }
    // Handle username
    public function username() {
        $key = 'username';
        $value = $this->info[$key];
        $display = ($value === NULL || $value === '') ? "none" : "flex"; 
        return [
            'display' => $display,
            'a' => $value,
            'div' => $value
        ];
    }
    // Handle image
    public function image() {
        $key = 'image';
        $value = $this->info[$key];
        $display = ($value === NULL || $value === '') ? "none" : "flex"; 
        return [
            'display' => $display,
            'a' => $value,
            'div' => $value
        ];
    }
    // Handle name
    public function name() {
        $key = 'name';
        $value = $this->info[$key];
        $display = ($value === NULL || $value === '') ? "none" : "flex"; 
        return [
            'display' => $display,
            'a' => $value,
            'div' => $value
        ];
    }
    // Handle description
    public function description() {
        $key = 'description';
        $value = $this->info[$key];
        $display = ($value === NULL || $value === '') ? "none" : "flex"; 
        return [
            'display' => $display,
            'a' => $value,
            'div' => $value
        ];
    }
    // Handle organization
    public function organization() {
        $key = 'organization';
        $value = $this->info[$key];
        $display = ($value === NULL || $value === '') ? "none" : "flex"; 
        return [
            'display' => $display,
            'a' => $value,
            'div' => $value
        ];
    }
    // Handle email formatting
    public function email($element = null) {
        $key = 'Email';
        $value = $this->info[$key];
        $display = ($value === NULL || $value === '') ? "none" : "flex"; 
        $element = ($element === NULL || $element === '') ? $value : $element; 
        return [
            'display' => $display,
            'a' => '<a href="mailto:'.$value.'" target="_blank" style="text-decoration: none; color: #000; display: '.$display.';">'.$element.'</a>',
            'div' => '<div style="text-decoration: none; color: #000; display: '.$display.';">'.$element.'</div>',
        ];
    }

    // Handle mobile phone number
    public function mobile($element = null) {
        $key = 'Mobile';
        $value = $this->info[$key];
        $display = ($value === NULL || $value === '') ? "none" : "flex"; 
        $element = ($element === NULL || $element === '') ? parent::phoneNumberFormat($value) : $element; 
        return [
            'display' => $display,
            'a' => '<a href="tel:'.parent::phoneNumberFormat($value).'" target="_blank" style="text-decoration: none; color: #000; display: '.$display.';">'.$element.'</a>',
            'div' => '<div style="text-decoration: none; color: #000; display: '.$display.';">'.$element.'</div>'
        ];
    }

    // Handle work phone number
    public function work($element = null) {
        $key = 'Work';
        $value = $this->info[$key];
        $display = ($value === NULL || $value === '') ? "none" : "flex"; 
        $element = ($element === NULL || $element === '') ? parent::phoneNumberFormat($value) : $element; 
        return [
            'display' => $display,
            'a' => '<a href="tel:'.parent::phoneNumberFormat($value).'" target="_blank" style="text-decoration: none; color: #000; display: '.$display.';">'.$element.'</a>',
            'div' => '<div style="text-decoration: none; color: #000; display: '.$display.';">'.$element.'</div>'
        ];
    }

    // Handle Address
    public function address($element = null) {
        $key = 'Address';
        $value = $this->info[$key];
        $display = ($value === NULL || $value === '') ? "none" : "flex"; 
        $element = ($element === NULL || $element === '') ? parent::handleLongString($value) : $element; 
        return [
            'display' => $display,
            'a' => '<a href="https://google.com/maps?q='.$value.'" target="_blank" style="text-decoration: none; color: #000; display: '.$display.';">'.$element.'</a>',
            'div' => '<div style="text-decoration: none; color: #000; display: '.$display.';">'.$element.'</div>'
        ];
    }

    // Handle Youtube
    public function youtube($element = null) {
        $key = 'Youtube';
        $value = $this->info[$key];
        $value = (self::getDeviceType() === "Mobile") ? str_replace("https", "youtube", $value) : $value; // make it able to go directly to youtube app if device type is Mobile
        $display = ($value === NULL || $value === '') ? "none" : "flex";
        $element = ($element === NULL || $element === '') ? parent::handleLongString($value) : $element;
        return [
            'display' => $display,
            'a' => '<a href="'.$value.'" target="_blank" style="text-decoration: none; color: #000; display: '.$display.';">'.$element.'</a>',
            'div' => '<div style="text-decoration: none; color: #000; display: '.$display.';">'.$element.'</div>'
        ];
    }

    // Handle social media
    public function social($social, $element = null) {
        $key = $social;
        switch($key) {
            case "username":
                return $this->username();
                break;
            case "image":
                return $this->image();
                break;
            case "organization":
                return $this->organization();
                break;
            case "description":
                return $this->description();
                break;
            case "Email":
                return $this->email($element);
                break;
            case "Address":
                return $this->address($element);
                break;
            case "Mobile":
                return $this->mobile($element);
                break;
            case "Work":
                return $this->work($element);
                break;
            case "Youtube":
                return $this->youtube($element);
            default:
                $value = $this->info[$key];
                $display = ($value === NULL || $value === '') ? "none" : "flex"; 
                $element = ($element === NULL || $element === '') ? parent::handleLongString($value) : $element; 
                return [
                    'display' => $display,
                    'a' => '<a href="'.$value.'" target="_blank" style="text-decoration: none; color: #000; display: '.$display.';">'.$element.'</a>',
                    'div' => '<div style="text-decoration: none; color: #000; display: '.$display.';">'.$element.'</div>'
                ];
                break;
        }
    }
}

function infoProcess($info) {
    return new InfoProcess($info);
}