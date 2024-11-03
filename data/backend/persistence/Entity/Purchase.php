<?php
namespace persistence\Entity;

use Doctrine\ORM\Mapping\Id;
use Doctrine\ORM\Mapping\Table;
use Doctrine\ORM\Mapping\Column;
use Doctrine\ORM\Mapping\Entity;
use Doctrine\ORM\Mapping\OneToOne;
use Doctrine\ORM\Mapping\ManyToOne;
use Doctrine\ORM\Mapping\JoinColumn;

#[Entity]
#[Table('Purchase')]
class Purchase {
    #[Id, Column(name: 'purchase_id')]
    private string $purchase_id;
    #[Column(name: 'username')]
    private string $username;
    #[ManyToOne(targetEntity: 'User', inversedBy: 'Purchase')]
    #[JoinColumn(name: 'username', referencedColumnName: 'username')]
    private $User;
    #[OneToOne(targetEntity: 'Style', mappedBy: 'Purchase', cascade: ['persist', 'remove'])]
    private $Style;
    #[ManyToOne(targetEntity: 'StyleDefault', inversedBy: 'Purchase')]
    #[JoinColumn(name: 'template_id', referencedColumnName: 'template_id')]
    private $StyleDefault;

    #[Column(name: 'template_id')]
    private int $template_id;
    #[Column(name: 'purchasedAt')]
    private \DateTime $purchasedAt;

    public function getPurchaseId():string {
        return $this->purchase_id;
    }

    public function getUsername(): string {
        return $this->username;
    }

    public function getTemplateId(): int {
        return $this->template_id;
    }

    public function getPurchasedAt(): \DateTime {
        return $this->purchasedAt;
    }
    public function setPurchasedId(string $id) : Purchase {
        $this->purchase_id = $id;
        return $this;
    }
    public function setUsername(string $username): Purchase {
        $this->username = $username;
        return $this;
    }
    public function setTemplateId(int $id): Purchase {
        $this->template_id = $id;
        return $this;
    }
}