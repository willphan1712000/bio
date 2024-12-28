<?php

namespace business\style;

use business\IAPI;
use persistence\Database;
use persistence\Entity\Style;
use persistence\Entity\StyleDefault;

class RESET extends PUT implements IAPI
{
    protected function updateStyle()
    {
        try {
            foreach ($this->props as $key => $value) {
                Database::PUT(Style::class, $key, Database::GET(StyleDefault::class, $key, ['template_id' => $this->template]), [
                    'username' => $this->username,
                    'template_id' => $this->template
                ]);
            }

            return [
                'success' => true
            ];
        } catch (\Exception $e) {
            return [
                'success' => false,
                'error' => $e->getMessage()
            ];
        }
    }
}
