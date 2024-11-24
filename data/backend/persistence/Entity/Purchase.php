<?php
namespace persistence\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping\Id;
use Doctrine\ORM\Mapping\Table;
use Doctrine\ORM\Mapping\Column;
use Doctrine\ORM\Mapping\Entity;
use Doctrine\ORM\Mapping\ManyToOne;
use Doctrine\ORM\Mapping\JoinColumn;
use Doctrine\ORM\Mapping\OneToMany;

#[Entity]
#[Table('Purchase')]
class Purchase extends EntityFunction {
    #[Id, Column(name: 'purchase_id')]
    protected string $purchase_id;
    #[Column(name: 'username')]
    protected string $username;
    #[ManyToOne(targetEntity: 'User', inversedBy: 'Purchase')]
    #[JoinColumn(name: 'username', referencedColumnName: 'username')]
    protected $User;
    #[OneToMany(targetEntity: 'Style', mappedBy: 'Purchase', cascade: ['persist', 'remove'])]
    protected Collection $Style;
    #[ManyToOne(targetEntity: 'StyleDefault', inversedBy: 'Purchase')]
    #[JoinColumn(name: 'template_id', referencedColumnName: 'template_id')]
    protected $StyleDefault;

    #[Column(name: 'template_id')]
    protected int $template_id;
    #[Column(name: 'purchasedAt')]
    protected \DateTime $purchasedAt;

    function __construct()
    {
        $this->purchasedAt = new \Datetime();
        $this->Style = new ArrayCollection();
    }

    public function setUser(User $User): Purchase {
        $this->User = $User;
        return $this;
    }

    public function setStyle(Style $Style): Purchase {
        $Style->setPurchase($this);
        $this->Style->add($Style);
        return $this;
    }
    public function setStyleDefault(StyleDefault $StyleDefault): Purchase {
        $this->StyleDefault = $StyleDefault;
        return $this;
    }
}