<?php
namespace component\button\user;
require_once __DIR__."/IUser.php";
use component\button\user\IUser;
require_once __DIR__."/User.php";
use component\button\user\User;

class UserTemplate implements IUser {
    private IUser $user;
    private $img;
    function __construct($username, $img) {
        $this->user = new User($username);
        $this->img = $img;
    }

    public function render() {
        return '<div class="btn-ele signin relative"><div class="img"><img draggable="false" src="'.$this->img.'"></div><p>Bio</p>'.$this->user->render().'</div>';
    }
}

function userTemplate($username, $img) {
    return new UserTemplate($username, $img);
}