<?php

namespace controllers\forgot;

use config\SystemConfig;
use persistence\Database;
use controllers\Controller;
use persistence\Entity\User;
use business\user\UserManagement;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\PHPMailer;

class ForgotController extends Controller
{
    protected ?string $username;
    protected ?string $email;
    protected ?string $error;
    protected ?string $active;
    protected ?string $inactive;

    function __construct()
    {
        $this->username = '';
        $this->email = '';
        $this->error = '';
        $this->inactive = null;
        $this->active = null;
    }

    private function sendEmail()
    {
        $emailAuth = SystemConfig::emailAuth();
        $g = SystemConfig::globalVariables();

        $usernameExist = UserManagement::isUserExist($this->username);
        $match = UserManagement::isEmailMatchUsername($this->username, $this->email);

        if (!$usernameExist) {
            $this->error = "Username does not exist";
        } else {
            if (!$match) {
                $this->error = "The email does not match with the username";
            } else {
                $token = time();
                $link = $g['domain'] . "/@resetPass?username=" . $this->username . "&token=" . $token;
                $to = $this->email;
                $subject = "Allinclicks, All rights reserved. " . $g['product_year'];
                $txt = "<h1>Reset Password</h1><p>Click on the link below to reset your password</p>";
                $txt .= "<p><a href=\"https://" . $link . "\" target=\"_blank\">Reset Link</a></p>";
                $txt .= "<p>Note: The link is going to expire in " . $g['resetExpireTxt'] . " minutes!</p>";
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

                    if ($mail->send()) {
                        $this->inactive = "inactive";
                        $this->active = "active";

                        Database::PUT(User::class, 'token', $token, ['username' => $this->username]);
                    }
                } catch (Exception $e) {
                    echo "<script>alert(\"Message could not be sent. Mailer Error: {$mail->ErrorInfo}\")</script>";
                }
            }
        }
    }

    public function execute()
    {
        $this->sendEmail();
    }
}
