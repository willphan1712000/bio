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
                Database::PUT(Style::class, $key, $value, [
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

    public function execute()
    {
        return $this->updateStyle();
    }
}
