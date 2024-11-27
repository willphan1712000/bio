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
                if (!Database::PUT(Style::class, $key, Database::GET(StyleDefault::class, $key, ['template_id' => $this->template]), [
                    'username' => $this->username,
                    'template_id' => $this->template
                ])) {
                    throw new \Exception("Reset data on the data failed, abort the update operation");
                    return false;
                }
            }

            return true;
        } catch (\Exception $e) {
            echo $e->getMessage();
            return false;
        }
    }
}
