<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;
    use PHPMailer\PHPMailer\SMTP;
    require "./data/vendor1/autoload.php";
    $g = SystemConfig::globalVariables();
    $conn = Database::connection();
    $emailAuth = SystemConfig::emailAuth();

    $error = "";
    $username = "";
    $email = "";

    if(isset($_POST['submit'])) {
        $username = $_POST['username'];
        $email = $_POST['email'];
        $usernameExist = false;
        $emailExist = false;
        $match = false;
        $usernameQuery = mysqli_query($conn, "SELECT username FROM user");
        while($row = mysqli_fetch_assoc($usernameQuery)) {
            if($row['username'] === $username) {
                $usernameExist = true;
                break;
            }
        }
        $emailQuery = mysqli_query($conn, "SELECT email FROM user");
        while($row = mysqli_fetch_assoc($emailQuery)) {
            if($row['email'] === $email) {
                $emailExist = true;
                break;
            }
        }
        $matchQuery = mysqli_query($conn, "SELECT email FROM user WHERE username = '$username'");
        if(mysqli_fetch_assoc($matchQuery)['email'] === $email) {
            $match = true;
        }
        if(!$usernameExist && $emailExist) {
            $error = "Username does not exist";
        } else if ($usernameExist && !$emailExist) {
            $error = "Email does not exist";
        } else if (!$usernameExist && !$emailExist) {
            $error = "Both username and Email do not exist";
        } else if ($usernameExist && $emailExist) {
            if(!$match) {
                $error = "The email does not match with the username";
            } else {
                $token = time();
                $link = $g['domain']."/".$token."?username=".$username;
                $to = $email;
                $subject = "Allinclicks, All rights reserved. ".$g['product_year'];
                $txt = "<h1>Reset Password</h1><p>Click on the link below to reset your password</p>";
                $txt .= "<p><a href=\"https://".$link."\" target=\"_blank\">Reset Link</a></p>";
                $txt .= "<p>Note: The link is going to expire in ".$g['resetExpireTxt']." minutes!</p>";
                $txt .= "<h3>Please, do not reply to this email.</h3>";
                // $headers = "From: ". $g['rootEmail'] . "\r\n";
                // $headers .= "Content-type: text/html\r\n";
        
                //Create an instance; passing `true` enables exceptions
                $mail = new PHPMailer(true);

                try {
                    //Server settings
                    // $mail->SMTPDebug = 2;
                    $mail->isSMTP();                                            //Send using SMTP
                    $mail->Host       = $emailAuth['host'];                     //Set the SMTP server to send through
                    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
                    $mail->Username   = $emailAuth['username'];                     //SMTP username
                    $mail->Password   = $emailAuth['password'];                               //SMTP password
                    $mail->SMTPSecure = 'ssl';            //Enable implicit TLS encryption
                    $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`
                    $mail->SMTPOptions = array(
                        'ssl' => array(
                        'verify_peer' => false,
                        'verify_peer_name' => false,
                        'allow_self_signed' => true
                        )
                    );

                    //Recipients
                    $mail->setFrom($g['rootEmail'], 'Allinclicks');
                    $mail->addAddress($to);     //Add a recipient
                    // $mail->addAddress('ellen@example.com');               //Name is optional
                    // $mail->addReplyTo($g['rootEmail'], 'Allinclicks');
                    // $mail->addCC('cc@example.com');
                    // $mail->addBCC('bcc@example.com');

                    //Attachments
                    // $mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
                    // $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name

                    //Content
                    $mail->isHTML(true);                                  //Set email format to HTML
                    $mail->Subject = $subject;
                    $mail->Body    = $txt;
                    $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

                    if($mail->send()) {
                        $inactive = "inactive";
                        $active = "active";
                        mysqli_query($conn, "UPDATE user SET token='$token' WHERE username='$username'");
                    }
                } catch (Exception $e) {
                    echo "<script>alert(\"Message could not be sent. Mailer Error: {$mail->ErrorInfo}\")</script>";
                }
            }
        }
    }
?> <!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title><?=$g['title'];?></title><script src="https://kit.fontawesome.com/960d33c629.js" crossorigin="anonymous"></script><script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script><script src="/dist/mainjs7c1b891bcfe0f337a70b.js"></script><script src="/dist/prevjs051119bc8e2a2ef287f1.js"></script><script src="/dist/universala65ac2dbc01a46adc0ce.js"></script><script src="/dist/mainf113d1b5433e744d1d14.js"></script></head><body><div class="logo"><img src="<?=$g['img']['logo']?>" alt=""></div><div class="signupParent"><div class="signupChild <?=$inactive;?>"><h1>Forgot Password</h1><span class="signupChild__error"><?=$error;?></span><form action="" id="signup" method="POST"><div class="inputField"><label for="username">Username</label> <input type="text" id="username" name="username" autocomplete="username" value="<?=$username;?>" required></div><div class="inputField"><label for="email">Email</label> <input type="email" id="email" name="email" autocomplete="email" value="<?=$email;?>" required></div><button type="submit" name="submit" class="signupChild__confirm--php">Send</button></form><p class="signupChild__msg">Forgot username? <a href="/forgotUsername">Click here</a></p><p class="signupChild__msg"><a href="/signin">Go Back</a></p></div><div class="signupChild emailSent <?=$active;?>"><div><i class="fa-solid fa-check" style="font-size: 40px;color: green;border: solid 2px green;border-radius: 50%;padding: 20px;margin-bottom: 10px;"></i></div><h2>Reset Password Link has been sent to your email</h2><h5>If you do not see the email, please check spam or junk email!</h5><p class="signupChild__msg"><a href="/signin">Go back to sign in</a></p></div></div><?php
copyright([
    'position' => 'absolute'
])->render();
?><script>const type = 'forgot'</script></body></html>