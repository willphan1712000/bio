<?php

namespace business\style;

use business\IAPI;
use persistence\Database;
use persistence\Entity\Style;
use persistence\Entity\User;

class GET implements IAPI
{
    private string $username;
    // private int $template;

    function __construct(string $username)
    {
        $this->username = $username;
        // $this->template = $template;
    }

    private function getStyle()
    {
        try {
            $template = Database::GET(User::class, 'defaultTemplate', ['username' => $this->username]);
            $style = Database::GET(Style::class, null, [
                'username' => $this->username,
                'template_id' => $template
            ]);

            $out = [];
            foreach (Style::getProperty() as $prop) {
                if (!in_array($prop, ['Purchase', 'StyleDefault', 'User'])) {
                    $out[$prop] = $style->get($prop);
                }
            }

            return [
                'success' => true,
                'data' => $out
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
        return $this->getStyle();
    }
}
