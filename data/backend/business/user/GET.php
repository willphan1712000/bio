<?php

namespace business\user;

use business\IAPI;
use persistence\Database;
use persistence\Entity\User;

class GET implements IAPI
{
    private ?string $username;

    function __construct(?string $username = null)
    {
        $this->username = $username;
    }

    private function getUser()
    {
        try {

            if ($this->username === null) {
                $users = Database::GET(User::class);
                $out = [];
                foreach ($users as $user) {
                    $row = [];

                    foreach (User::getProperty() as $prop) {
                        if (!in_array($prop, ['UserInfo', 'UserPhone', 'UserSocial', 'Template', 'Purchase', 'Style'])) {
                            $row[$prop] = $user->get($prop);
                        }
                    }

                    array_push($out, $row);
                }

                return $out;
            }

            $user = Database::GET(User::class, null, [
                'username' => $this->username
            ]);

            if ($user === null) {
                throw new \Exception("user does not exist");
            }

            $row = [];

            foreach (User::getProperty() as $prop) {
                if (!in_array($prop, ['UserInfo', 'UserPhone', 'UserSocial', 'Template', 'Purchase', 'Style'])) {
                    $row[$prop] = $user->get($prop);
                }
            }

            return $row;
        } catch (\Exception $e) {
            return [
                'success' => false,
                'error' => $e->getMessage()
            ];
        }
    }

    public function execute()
    {
        return $this->getUser();
    }
}
