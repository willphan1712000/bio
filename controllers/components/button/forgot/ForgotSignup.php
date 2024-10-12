<?php
namespace component\button\forgot;
require_once __DIR__."/../../signin/SigninButton.php";
use component\signin\SigninButton;
require_once __DIR__."/Forgot.php";
use component\button\forgot\Forgot;

class ForgotSignup implements SigninButton {
    private SigninButton $forgot;
    function __construct() {
        $this->forgot = new Forgot();
    }

    public function render() {
        return '<div class="relative shadow rounded-[10px] bg-white p-[6px]">Forgot password?'.$this->forgot->render().'</div>';
    }
}

function forgotSignup() {
    return new ForgotSignup();
}