<?php
namespace component\signup;
require_once __DIR__."/../signin/SigninButton.php";
use component\signin\SigninButton;
require_once __DIR__."/Signup.php";
use component\signup\Signup;

class SignupSignin implements SigninButton {
    private SigninButton $signup;
    function __construct() {
        $this->signup = new Signup();
    }

    public function render() {
        return '<div class="relative shadow rounded-[10px] bg-white p-[6px]">Sign up'.$this->signup->render().'</div>';
    }
}

function signupSignin() {
    return new SignupSignin();
}