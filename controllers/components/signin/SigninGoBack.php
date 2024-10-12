<?php
namespace component\signin;
require_once __DIR__."/SigninButton.php";
use component\signin\SigninButton;
require_once __DIR__."/Signin.php";
use component\signin\Signin;

class SigninGoBack implements SigninButton {
    private SigninButton $signin;
    function __construct() {
        $this->signin = new Signin();
    }

    public function render() {
        return '<div class="relative shadow rounded-[10px] bg-white p-[6px]">Go back to sign in'.$this->signin->render().'</div>';
    }
}

function signinGoBack() {
    return new SigninGoBack();
}