<?php

namespace business\style;

use business\IAPI;
use persistence\EntityManager;

class PUT implements IAPI
{
    private string $username;
    private string $template;

    function __construct(string $username, string $template)
    {
        $this->username = $username;
    }

    private function getStyle()
    {
        try {
            $entityManager = EntityManager::getEntityManager();

            return true;
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
