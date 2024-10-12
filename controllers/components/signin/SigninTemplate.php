<?php
namespace component\signin;
require_once __DIR__."/SigninButton.php";
use component\signin\SigninButton;
require_once __DIR__."/Signin.php";
use component\signin\Signin;

class SigninTemplate implements SigninButton {
    private SigninButton $signin;
    function __construct() {
        $this->signin = new Signin("?template=true");
    }

    public function render() {
        return '<div class="btn-ele signin relative"><i class="fa-solid fa-user"></i> Sign in'.$this->signin->render().'</div>';
    }
}

function signinTemplate() {
    return new SigninTemplate();
}