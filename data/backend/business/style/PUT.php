<?php

namespace business\style;

use business\IAPI;
use persistence\Database;
use persistence\Entity\Style;

class PUT implements IAPI
{
    protected string $username;
    protected int $template;
    protected array $props;

    function __construct(string $username, int $template, array $props)
    {
        $this->username = $username;
        $this->template = $template;
        $this->props = $props;
    }

    protected function updateStyle()
    {
        try {
            foreach ($this->props as $key => $value) {
                if ($value === null || $value === '') {
                    continue;
                }
                if (!Database::PUT(Style::class, $key, $value, [
                    'username' => $this->username,
                    'template_id' => $this->template
                ])) {
                    throw new \Exception("Update data on the data failed, abort the update operation");
                    return false;
                }
            }

            return true;
        } catch (\Exception $e) {
            echo $e->getMessage();
            return false;
        }
    }

    public function execute()
    {
        return $this->updateStyle();
    }
}
