<?php
namespace business\template;

use business\IAPI;
use persistence\Entity\Template;
use persistence\Entity\User;
use persistence\EntityManager;

class POST implements IAPI {
    private string $username;
    private int $template_id;

    function __construct(string $username, int $template_id)
    {
        $this->username = $username; 
        $this->template_id = $template_id;
    }
    
    private function addLikedTemplate() {
        try {
            $entityManager = EntityManager::getEntityManager();

            $template = new Template();
            $template->setUsername($this->username);
            $template->setTemplateId($this->template_id);

            /** @var User $user */
            $user = $entityManager->find(User::class, $this->username);
            $user->setTemplate($template);

            $entityManager->persist($user);
            $entityManager->flush();

            return true;
        } catch (\Exception $e) {
            echo $e->getMessage();
            return false;
        }
    }

    public function execute()
    {
        return $this->addLikedTemplate();
    }
}