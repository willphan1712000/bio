<?php

namespace persistence\Entity;

use Doctrine\ORM\Mapping\Id;
use Doctrine\ORM\Mapping\Table;
use Doctrine\ORM\Mapping\Column;
use Doctrine\ORM\Mapping\Entity;
use Doctrine\ORM\Mapping\ManyToOne;
use Doctrine\ORM\Mapping\JoinColumn;

#[Entity()]
#[Table('Style')]
class Style extends EntityFunction
{
    #[ManyToOne(targetEntity: 'Purchase', inversedBy: 'Style')]
    #[JoinColumn(name: 'purchase_id', referencedColumnName: 'purchase_id', onDelete: 'CASCADE')]
    protected $Purchase;
    // #[ManyToOne(targetEntity: 'StyleDefault', inversedBy: 'Style')]
    // #[JoinColumn(name: 'template_id', referencedColumnName: 'template_id', onDelete: 'CASCADE')]
    // protected $StyleDefault;
    #[ManyToOne(targetEntity: 'User', inversedBy: 'Style')]
    #[JoinColumn(name: 'username', referencedColumnName: 'username', onDelete: 'CASCADE')]
    protected $User;

    #[Id, Column(name: 'purchase_id')]
    protected int $purchase_id;
    #[Column(name: 'username')]
    protected string $username;
    #[Column(name: 'template_id')]
    protected int $template_id;
    #[Column(name: 'font')]
    protected string $font;
    #[Column(name: 'fontSize')]
    protected string $fontSize;
    #[Column(name: 'fontColor')]
    protected string $fontColor;
    #[Column(name: 'background')]
    protected string $background;

    // public function setStyleDefault(StyleDefault $StyleDefault): Style
    // {
    //     $this->StyleDefault = $StyleDefault;
    //     return $this;
    // }
    public function setPurchase(Purchase $Purchase): Style
    {
        $this->Purchase = $Purchase;
        return $this;
    }
    public function setUser(User $User): Style
    {
        $this->User = $User;
        return $this;
    }
}
