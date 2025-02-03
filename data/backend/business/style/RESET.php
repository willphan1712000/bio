<?php

namespace business\style;

use business\IAPI;
use persistence\Database;
use persistence\Entity\User;
use persistence\Entity\StyleDefault;

class RESET extends GET implements IAPI
{
    protected function getStyle()
    {
        try {
            $template = Database::GET(User::class, 'defaultTemplate', ['username' => $this->username]);
            $style = Database::GET(StyleDefault::class, null, ['template_id' => $template]);

            $out = [];
            foreach (StyleDefault::getProperty() as $prop) {
                if (in_array($prop, ['background', 'font', 'fontSize', 'fontColor'])) {
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
