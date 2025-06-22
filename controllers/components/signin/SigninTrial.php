<?php

namespace component\signin;

require_once __DIR__ . "/SigninButton.php";

use component\signin\SigninButton;

require_once __DIR__ . "/Signin.php";

use component\signin\Signin;

class SigninTrial implements SigninButton
{
    private SigninButton $signin;
    function __construct()
    {
        $this->signin = new Signin();
    }

    public function render()
    {
        return '<div class="relative rounded-[20px] border-black border-[2px] size-full flex justify-center items-center no-underline text-black hover:bg-white transition-all"><i class="fa-solid fa-right-to-bracket mr-[5px]"></i>Start Trial' . $this->signin->render() . '</div>';
    }
}
