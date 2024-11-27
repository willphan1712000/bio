<?php

namespace business\template;

use business\IAPI;
use persistence\Database;
use persistence\Entity\Template;

class DELETE implements IAPI
{
    private string $username;
    private int $template_id;

    function __construct(string $username, int $template_id)
    {
        $this->username = $username;
        $this->template_id = $template_id;
    }

    private function deleteLikedTemplate()
    {
        try {
            return [
                'success' => Database::DELETE(Template::class, [
                    'username' => $this->username,
                    'template_id' => $this->template_id
                ])
            ];
        } catch (\Exception $e) {
            return [
                'success' => false,
                'error' => $e->getMessage()
            ];
        }
    }

    public function execute()
    {
        return $this->deleteLikedTemplate();
    }
}
