<?php
namespace component\button\forgot;
require_once __DIR__."/../../signin/SigninButton.php";
use component\signin\SigninButton;

class Forgot implements SigninButton {
    private string $href;
    function __construct() {
        $this->href = '/@forgot';
    }

    public function html() {
        return '
            <a class="absolute top-0 left-0 w-full h-full flex justify-center items-center" href="'.$this->href.'"></a>
        ';
    }

    public function render() {
        return $this->html();
    }
}