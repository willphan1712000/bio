<?php

use component\Copyright;
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>AIC Admin</title>
    <script src="https://kit.fontawesome.com/960d33c629.js" crossorigin="anonymous"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
</head>

<body>
    <div class="warning__parent">
        <div class="warning__child"><i class="fa-solid fa-circle-exclamation"></i>
            <p style="text-align: center">Warning, all information of this account will be deleted, are you sure you want to proceed?</p>
            <div class="btn">
                <div class="btn__ele btn__confirm">Yes</div>
                <div class="btn__ele btn__back">No</div>
            </div>
        </div>
    </div>
    <div id="aic">
        <!-- ========= SEPARATOR ========== -->
        <div id="admin_container"></div>
        <!-- ========= SEPARATOR ========== -->
        <?php
        (new Copyright([
            'position' => 'relative'
        ]))->render();
        ?>
    </div>
    <script>
        const type = 'aic';
    </script>
</body>

</html>