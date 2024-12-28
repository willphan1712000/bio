<?php

namespace business\style;

use business\IAPI;
use persistence\Database;
use persistence\Entity\Style;

class GET implements IAPI
{
    private string $username;
    private int $template;

    function __construct(string $username, int $template)
    {
        $this->username = $username;
        $this->template = $template;
    }

    private function getStyle()
    {
        try {
            $style = Database::GET(Style::class, null, [
                'username' => $this->username,
                'template_id' => $this->template
            ]);

            $out = [];
            foreach (Style::getProperty() as $prop) {
                if (!in_array($prop, ['Purchase', 'StyleDefault', 'User'])) {
                    $out[$prop] = $style->get($prop);
                }
            }

            return $out;
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
