<?php
namespace component\button\forgot;
require_once __DIR__."/../../signin/SigninButton.php";
use component\signin\SigninButton;
require_once __DIR__."/Forgot.php";
use component\button\forgot\Forgot;

class ForgotGoBack implements SigninButton {
    private SigninButton $forgot;
    function __construct() {
        $this->forgot = new Forgot();
    }

    public function render() {
        return '<div class="relative shadow rounded-[10px] bg-white p-[6px]">Go Back to Forgot Password'.$this->forgot->render().'</div>';
    }
}

function forgotGoBack() {
    return new ForgotGoBack();
}