<?php
namespace component\signup;
require_once __DIR__."/../signin/SigninButton.php";
use component\signin\SigninButton;
require_once __DIR__."/Signup.php";
use component\signup\Signup;

class SignupTerms implements SigninButton {
    private SigninButton $signup;
    function __construct() {
        $this->signup = new Signup();
    }

    public function render() {
        return '<div class="absolute flex justify-center items-center top-[5px] right-[5px] m-[10px] rounded-[50%] bg-[#fff] p-[20px] shadow-[0px_7px_29px_0px_rgba(100,100,111,0.2)] no-underline text-black"><i class="fa-solid fa-arrow-left"></i>'.$this->signup->render().'</div>';
    }
}

function signupTerms() {
    return new SignupTerms();
}