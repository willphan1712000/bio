<?php

namespace business\user;

class InfoAnchor extends InfoAnchorFunction
{
    private $info;

    public function __construct($info)
    {
        $this->info = $info;
    }

    // Handle username
    private function username()
    {
        $key = 'username';
        $value = $this->info[$key];
        $display = ($value === NULL || $value === '') ? "none" : "flex";
        return [
            'display' => $display,
            'label' => $this->makeSpaceBetweenCharacters($key),
            'a' => $value,
            'div' => $value
        ];
    }
    // Handle image
    private function image()
    {
        $key = 'image';
        $value = $this->info[$key];
        $display = ($value === NULL || $value === '') ? "none" : "flex";
        return [
            'display' => $display,
            'label' => $this->makeSpaceBetweenCharacters($key),
            'a' => $value,
            'div' => $value
        ];
    }
    // Handle name
    private function name()
    {
        $key = 'name';
        $value = $this->info[$key];
        $display = ($value === NULL || $value === '') ? "none" : "flex";
        return [
            'display' => $display,
            'label' => $this->makeSpaceBetweenCharacters($key),
            'a' => $value,
            'div' => $value
        ];
    }
    // Handle description
    private function description()
    {
        $key = 'description';
        $value = $this->info[$key];
        $display = ($value === NULL || $value === '') ? "none" : "flex";
        return [
            'display' => $display,
            'label' => $this->makeSpaceBetweenCharacters($key),
            'a' => $value,
            'div' => $value
        ];
    }
    // Handle organization
    private function organization()
    {
        $key = 'organization';
        $value = $this->info[$key];
        $display = ($value === NULL || $value === '') ? "none" : "flex";
        return [
            'display' => $display,
            'label' => $this->makeSpaceBetweenCharacters($key),
            'a' => $value,
            'div' => $value
        ];
    }
    // Handle email formatting
    private function email($element = null)
    {
        $key = 'Email';
        $value = $this->info[$key];
        $display = ($value === NULL || $value === '') ? "none" : "flex";
        $element = ($element === NULL || $element === '') ? $value : $element;
        return [
            'display' => $display,
            'label' => $this->makeSpaceBetweenCharacters($key),
            'a' => '<a href="mailto:' . $value . '" target="_blank" style="text-decoration: none; color: #000; display: ' . $display . ';">' . $element . '</a>',
            'div' => '<div style="text-decoration: none; color: #000; display: ' . $display . ';">' . $element . '</div>',
        ];
    }

    // Handle mobile phone number
    private function mobile($element = null)
    {
        $key = 'Mobile';
        $value = $this->info[$key];
        $display = ($value === NULL || $value === '') ? "none" : "flex";
        $element = ($element === NULL || $element === '') ? $this->phoneNumberFormat($this->info['MobileCode'], $this->info['Mobile']) : $element;
        return [
            'display' => $display,
            'label' => $this->makeSpaceBetweenCharacters($key),
            'a' => '<a href="tel:' . $this->phoneNumberFormat($this->info['MobileCode'], $this->info['Mobile']) . '" target="_blank" style="text-decoration: none; color: #000; display: ' . $display . ';">' . $element . '</a>',
            'div' => '<div style="text-decoration: none; color: #000; display: ' . $display . ';">' . $element . '</div>'
        ];
    }

    // Handle work phone number
    private function work($element = null)
    {
        $key = 'Work';
        $value = $this->info[$key];
        $display = ($value === NULL || $value === '') ? "none" : "flex";
        $element = ($element === NULL || $element === '') ? $this->phoneNumberFormat($this->info['WorkCode'], $this->info['Work']) : $element;
        return [
            'display' => $display,
            'label' => $this->makeSpaceBetweenCharacters($key),
            'a' => '<a href="tel:' . $this->phoneNumberFormat($this->info['WorkCode'], $this->info['Work']) . '" target="_blank" style="text-decoration: none; color: #000; display: ' . $display . ';">' . $element . '</a>',
            'div' => '<div style="text-decoration: none; color: #000; display: ' . $display . ';">' . $element . '</div>'
        ];
    }

    // Handle Address
    private function address($element = null)
    {
        $key = 'Address';
        $value = $this->info[$key];
        $display = ($value === NULL || $value === '') ? "none" : "flex";
        $element = ($element === NULL || $element === '') ? $this->handleLongString($value) : $element;
        return [
            'display' => $display,
            'label' => $this->makeSpaceBetweenCharacters($key),
            'a' => '<a href="'  . $value . '" target="_blank" style="text-decoration: none; color: #000; display: ' . $display . ';">' . $element . '</a>',
            'div' => '<div style="text-decoration: none; color: #000; display: ' . $display . ';">' . $element . '</div>'
        ];
    }

    // Handle Youtube
    private function youtube($element = null)
    {
        $key = 'Youtube';
        $value = $this->info[$key];
        if ($value !== NULL && $value !== "") {
            $value = (self::getDeviceType() === "Mobile") ? str_replace("https", "youtube", $value) : $value; // make it able to go directly to youtube app if device type is Mobile
        }
        $display = ($value === NULL || $value === '') ? "none" : "flex";
        $element = ($element === NULL || $element === '') ? $this->handleLongString($value) : $element;
        return [
            'display' => $display,
            'label' => $this->makeSpaceBetweenCharacters($key),
            'a' => '<a href="' . $value . '" target="_blank" style="text-decoration: none; color: #000; display: ' . $display . ';">' . $element . '</a>',
            'div' => '<div style="text-decoration: none; color: #000; display: ' . $display . ';">' . $element . '</div>'
        ];
    }

    // Handle social media
    public function social(string $social, string $element = null)
    {
        $key = $social;
        switch ($key) {
            case "username":
                return $this->username();
                break;
            case "name":
                return $this->name();
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
                $element = ($element === NULL || $element === '') ? $this->handleLongString($value) : $element;
                return [
                    'display' => $display,
                    'label' => $this->makeSpaceBetweenCharacters($key),
                    'a' => '<a href="' . $value . '" target="_blank" style="text-decoration: none; color: #000; display: ' . $display . ';">' . $element . '</a>',
                    'div' => '<div style="text-decoration: none; color: #000; display: ' . $display . ';">' . $element . '</div>'
                ];
                break;
        }
    }
}
