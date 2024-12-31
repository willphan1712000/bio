<?php
// 
namespace business\user;

use business\IAPI;
use persistence\Database;
use persistence\Entity\User;

class GET implements IAPI
{
    private ?string $username;
    private ?int $offset;
    private ?string $limit;
    private ?string $like;

    function __construct(?string $username = null, ?int $offset = 0, ?string $limit = null, ?string $like = '')
    {
        $this->username = $username;
        $this->offset = $offset;
        $this->limit = $limit;
        $this->like = $like;
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
                        if (!in_array($prop, ['UserInfo', 'UserPhone', 'UserSocial', 'Template', 'Purchase', 'Style', 'StyleDefault'])) {
                            $row[$prop] = $user->get($prop);
                        }
                    }

                    array_push($out, $row);
                }

                return [
                    'success' => true,
                    'data' => $out
                ];
            }

            if ($this->like !== null || $this->offset !== null || $this->limit !== null) {
                $like = $this->like . "%";
                $offset = $this->offset;
                $limit = $this->limit;
                $r = Database::SQL("SELECT *FROM User WHERE username LIKE '$like' OR email LIKE '$like' LIMIT $limit OFFSET $offset");

                return [
                    'success' => true,
                    'data' => $r
                ];
            }

            $user = Database::GET(User::class, null, [
                'username' => $this->username
            ]);

            if ($user === null) {
                throw new \Exception("user does not exist");
            }

            $row = [];

            foreach (User::getProperty() as $prop) {
                if (!in_array($prop, ['UserInfo', 'UserPhone', 'UserSocial', 'Template', 'Purchase', 'Style', 'StyleDefault'])) {
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
