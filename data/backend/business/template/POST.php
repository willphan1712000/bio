<?php

namespace business\template;

use business\IAPI;
use persistence\Entity\StyleDefault;
use persistence\Entity\Template;
use persistence\Entity\User;
use persistence\EntityManager;

class POST implements IAPI
{
    private string $username;
    private int $template_id;

    function __construct(string $username, int $template_id)
    {
        $this->username = $username;
        $this->template_id = $template_id;
    }

    private function addLikedTemplate()
    {
        try {
            $entityManager = EntityManager::getEntityManager();

            $template = new Template();
            $template->setUsername($this->username);
            $template->setTemplateId($this->template_id);

            /** @var User $user */
            $user = $entityManager->find(User::class, $this->username);
            if ($user === NULL) {
                throw new \Exception("user does not exist");
            }

            $user->setTemplate($template);

            /** @var StyleDefault*/
            $styleDefault = $entityManager->find(StyleDefault::class, $this->template_id);
            if ($styleDefault === NULL) {
                throw new \Exception("template does not exist");
            }

            $styleDefault->setTemplate($template);

            $entityManager->persist($user);
            $entityManager->flush();

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
        return $this->addLikedTemplate();
    }
}
