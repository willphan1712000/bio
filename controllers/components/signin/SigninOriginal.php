<?php
namespace component\signin;
require_once __DIR__."/SigninButton.php";
use component\signin\SigninButton;
require_once __DIR__."/Signin.php";
use component\signin\Signin;

class SigninOriginal implements SigninButton {
    private SigninButton $signin;
    function __construct() {
        $this->signin = new Signin();
    }

    public function render() {
        return '<div style="background-color: var(--main-deepColor);" class="relative flex justify-center items-center h-[50px] rounded-[20px] text-black my-0 mx-[15px] p-[10px]">Sign in'.$this->signin->render().'</div>';
    }
}

function signinOriginal() {
    return new SigninOriginal();
}