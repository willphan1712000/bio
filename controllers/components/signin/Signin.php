<?php

namespace component\signin;

require_once __DIR__ . "/SigninButton.php";

use component\signin\SigninButton;

class Signin implements SigninButton
{
    private string $href;
    function __construct($query = "")
    {
        $this->href = '/@signin' . $query;
    }

    public function html()
    {
        return '
            <a class="absolute top-0 left-0 w-full h-full flex justify-center items-center" href="' . $this->href . '"></a>
        ';
    }

    public function render()
    {
        return $this->html();
    }
}
