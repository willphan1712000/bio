<?php

use config\SystemConfig;

$g = SystemConfig::globalVariables();

use business\user\InfoAnchor;
use controllers\user\UserController;
use component\Template;
use component\Copyright;
use component\UserFooter;

// get User object
$user = new UserController();
$user->execute();

// get username
$username = $user->getUsername();
// Get themeid
$themeid = $user->getThemeid();
// Get CSS for corresponding template
$css = $user->getCSS();
// Get url for the page with specific username
$url = $user->getURL();

// This is information that gets passed down to the corresponsing template
$props = [
    'username' => $username,
    'icon' => SystemConfig::socialIconArr(),
    'info' => new InfoAnchor($user->getInfo()),
    'css' => $css,
    'mode' => 'a'
];
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title><?= $g['userTitle']; ?></title>
    <script src="https://kit.fontawesome.com/960d33c629.js" crossorigin="anonymous"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
</head>

<body>
    <div id="notSupported">
        <p>Bio does not support wide screen!</p>
    </div>
    <div id="container">
        <?php
        (new Template($themeid, $props))->execute()->html(); ?>
    </div>
    <div id="userFooter">
        <?php
        (new UserFooter())->render("#userFooter");
        ?>
    </div>
    <?php (new Copyright([
        'position' => 'relative'
    ]))->render(); ?>

    <script>
        const props = {
            url: "<?= $url; ?>",
            username: "<?= $username; ?>"
        }
        console.log(props)
    </script>
</body>

</html>