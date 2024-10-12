<?php
namespace component;
require_once __DIR__."/signin/SigninTemplate.php";
use function component\signin\signinTemplate;
require_once __DIR__."/button/user/UserTemplate.php";
use function component\button\user\userTemplate;
require_once __DIR__."/button/admin/AdminTemplate.php";
use function component\button\admin\adminTemplate;

class TemplateDirector {
    private $props;
    function __construct($props) {
        $this->props = $props;
    }
    
    public function execute() {
        $props = $this->props;
        if($props['isSignedIn']) {
            return userTemplate($props['username'], $props['img'])->render() . adminTemplate($props['username'], $props['img'])->render();
        }
        return signinTemplate()->render();
    }
}

function templateDirector($props) {
    return new TemplateDirector($props);
}
?>

<?php
// if(true) {
//     echo '
//         <a class="btn-ele signin" href="/'.$username.'"><div class="img"><img draggable="false" src="'.$imgPath.'"></div><p>Bio</p></a>
//     ';
//     echo '
//         <a class="btn-ele signin admin" href="/'.$username.'/admin"><div class="img"><img draggable="false" src="'.$imgPath.'"></div><p>Admin</p></a>
//     ';
// } else {
//     echo '
//         <a class="btn-ele signin" href="/signin?template=true"><i class="fa-solid fa-user"></i> Sign in</a>
//     ';
// }
?> 