<?php
namespace component\signup;
require_once __DIR__."/../signin/SigninButton.php";
use component\signin\SigninButton;
require_once __DIR__."/Signup.php";
use component\signup\Signup;

class SignupMain implements SigninButton {
    private SigninButton $signup;
    function __construct() {
        $this->signup = new Signup();
    }

    public function render() {
        return '<div class="relative rounded-[20px] bg-white w-[150px] h-[70px] flex justify-center items-center my-0 mx-[40px] no-underline text-black"><i class="fa-brands fa-stumbleupon mr-[5px]"></i>Sign up'.$this->signup->render().'</div>';
    }
}

function signupMain() {
    return new SignupMain();
}