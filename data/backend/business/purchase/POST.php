<?php

namespace business\purchase;

use business\IAPI;
use persistence\EntityManager;
use business\purchase\operation\Amount;
use business\purchase\operation\Operation;
use persistence\Database;
use persistence\Entity\Purchase;
use persistence\Entity\Style;
use persistence\Entity\StyleDefault;
use persistence\Entity\User;

class POST implements IAPI
{
    private string $username;
    private array $templates;
    private Operation $operation;

    function __construct(string $username, array $templates)
    {
        $this->username = $username;
        $this->templates = $templates;
        $this->operation = new Amount($templates);
    }

    private function addPurchase()
    {
        try {
            $entityManager = EntityManager::getEntityManager();

            // Calculate subtotal
            $subtotal = $this->operation->execute();
            // Suppose tax rate
            $rate = 0.06;
            $total = $subtotal * (1 + $rate);

            $purchase = new Purchase();
            $purchase
                ->set('username', $this->username)
                ->set('subtotal', $subtotal)
                ->set('total', $total);

            /** @var User|NULL */
            $user = $entityManager->find(User::class, ['username' => $this->username]);
            $user->setPurchase($purchase);

            foreach ($this->templates as $template) {
                $style = (new Style())
                    ->set('username', $this->username)
                    ->set('template_id', $template)
                    ->set('font', Database::GET(StyleDefault::class, 'font', ['template_id' => $template]))
                    ->set('fontSize', Database::GET(StyleDefault::class, 'fontSize', ['template_id' => $template]))
                    ->set('fontColor', Database::GET(StyleDefault::class, 'fontColor', ['template_id' => $template]))
                    ->set('background', Database::GET(StyleDefault::class, 'background', ['template_id' => $template]));

                $purchase->setStyle($style);
                $user->setStyle($style);

                /** @var StyleDefault|NULL */
                $styleDefault = $entityManager->find(StyleDefault::class, ['template_id' => $template]);
                $styleDefault->setStyle($style);
            }

            $entityManager->persist($purchase);
            $entityManager->flush();
            return true;
        } catch (\Exception $e) {
            echo $e->getMessage();
            return false;
        }
    }

    public function execute()
    {
        return $this->addPurchase();
    }
}
