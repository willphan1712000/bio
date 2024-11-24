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
    #[ManyToOne(targetEntity: 'User', inversedBy: 'Purchase')]
    #[JoinColumn(name: 'username', referencedColumnName: 'username')]
    protected $User;
    #[OneToMany(targetEntity: 'Style', mappedBy: 'Purchase', cascade: ['persist', 'remove'])]
    protected Collection $Style;
    
    #[Id, Column(name: 'purchase_id')]
    protected int $purchase_id;
    #[Column(name: 'username')]
    protected string $username;
    #[Column(name: 'template_id')]
    protected int $template_id;
    #[Column(name: 'subtotal')]
    protected int $subtotal;
    #[Column(name: 'total')]
    protected int $total;
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
}