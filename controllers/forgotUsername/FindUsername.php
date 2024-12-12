<?php

namespace controllers\forgotUsername;

use persistence\Database;
use controllers\Controller;

class FindUsername extends Controller
{
    protected $accStr;
    protected $count;
    protected $error;
    protected $inactive;
    protected $active;
    protected $email;

    function __construct()
    {
        $this->count = 0;
        $this->error = "";
        $this->accStr = "";
        $this->inactive = "";
        $this->active = "";
        $this->email = "";
    }

    public function execute()
    {
        $email = $this->email;
        $emails = Database::SQL("SELECT username FROM User WHERE email = '$email'");
        foreach ($emails as $email) {
            $this->count++;
            $this->accStr .= "<h3>" . $email['username'] . "</h3>";
        }
        if (empty($this->accStr)) {
            $this->error = "The email does not exist";
        } else {
            $this->inactive = "inactive";
            $this->active = "active";
        }
    }
}
