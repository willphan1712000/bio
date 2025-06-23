<?php

namespace component\signin;

require_once __DIR__ . "/SigninButton.php";

use component\signin\SigninButton;

require_once __DIR__ . "/Signin.php";

use component\signin\Signin;

class SigninMain implements SigninButton
{
    private SigninButton $signin;
    function __construct()
    {
        $this->signin = new Signin();
    }

    public function render()
    {
        return '<div class="relative rounded-[20px] bg-white size-full flex justify-center items-center no-underline text-black border-[2px] border-black"><i class="fa-solid fa-right-to-bracket mr-[5px]"></i>Sign in' . $this->signin->render() . '</div>';
    }
}

function signinMain()
{
    return new SigninMain();
}
