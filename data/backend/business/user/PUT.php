<?php

namespace business\user;

require_once __DIR__ . "/../IAPI.php";

use business\IAPI;
use business\user\signup\Input;
use business\user\signup\Password;
use persistence\Database;
use persistence\Entity\User;

class PUT implements IAPI
{
    private ?string $username;
    private string $password;

    function __construct(?string $username, $password)
    {
        $this->username = $username;
        $this->password = $password;
    }

    // When user wants to edit password
    private function updateUser()
    {
        try {
            // validate password
            $passValid = new Password(null);
            if ($passValid->doHandle(new Input(null, null, $this->password))) {
                Database::PUT(User::class, 'password', $this->password, ['username' => $this->username]);
                return [
                    'success' => true
                ];
            }
        } catch (\Exception $e) {
            return [
                'success' => false,
                'error' => $e->getMessage()
            ];
        }
    }

    public function execute()
    {
        return $this->updateUser();
    }
}
