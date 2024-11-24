<?php

namespace business\style;

use business\IAPI;
use persistence\Database;
use persistence\Entity\Style;

class GET implements IAPI
{
    private string $username;
    private string $template;

    function __construct(string $username, string $template)
    {
        $this->username = $username;
        $this->template = $template;
    }

    private function getStyle()
    {
        try {
            return Database::GET(Style::class, null, [
                'username' => $this->username,
                'template_id' => $this->template
            ]);
        } catch (\Exception $e) {
            echo $e->getMessage();
            return false;
        }
    }

    public function execute()
    {
        return $this->getStyle();
    }
}
