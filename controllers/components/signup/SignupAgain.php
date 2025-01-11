<?php

namespace component\signup;

require_once __DIR__ . "/../signin/SigninButton.php";

use component\signin\SigninButton;

require_once __DIR__ . "/Signup.php";

use component\signup\Signup;

class SignupAgain implements SigninButton
{
    private SigninButton $signup;
    function __construct()
    {
        $this->signup = new Signup();
    }

    public function render()
    {
        return '<div class="relative flex justify-center items-center h-[50px] rounded-[20px] text-black my-0 mx-[15px] p-[10px] bg-white">Create another bio' . $this->signup->render() . '</div>';
    }
}

function signupAgain()
{
    return new SignupAgain();
}
