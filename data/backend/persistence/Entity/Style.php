<?php
namespace persistence\Entity;

use Doctrine\ORM\Mapping\Id;
use Doctrine\ORM\Mapping\Table;
use Doctrine\ORM\Mapping\Column;
use Doctrine\ORM\Mapping\Entity;
use Doctrine\ORM\Mapping\OneToOne;
use Doctrine\ORM\Mapping\JoinColumn;

#[Entity()]
#[Table('Style')]
class Style extends EntityFunction {
    #[Id, Column(name: 'purchase_id')]
    protected string $purchase_id;
    #[OneToOne(targetEntity: 'Purchase', inversedBy: 'Style')]
    #[JoinColumn(name: 'purchase_id', referencedColumnName: 'purchase_id', onDelete: 'CASCADE')]
    protected $Purchase;
    
    #[Column(name: 'font')]
    protected string $font;
    #[Column(name: 'fontSize')]
    protected string $fontSize;
    #[Column(name: 'fontColor')]
    protected string $fontColor;
    #[Column(name: 'background')]
    protected string $background;

    // public function getUsername() : string {
    //     return $this->username;
    // }
    // public function getTemplateId() : string {
    //     return $this->template_id;
    // }
    public function getPurchaseId(): string {
        return $this->purchase_id;
    }
    public function getFont() : string {
        return $this->font;
    }
    public function getFontSize() : string {
        return $this->fontSize;
    }
    public function getFontColor() : string {
        return $this->fontColor;
    }
    public function getBackground() : string {
        return $this->background;
    }

    // public function setUsername(string $username): Style {
    //     $this->username = $username;
    //     return $this;
    // }
    // public function setTemplateId(string $id): Style {
    //     $this->template_id = $id;
    //     return $this;
    // }
    public function setPurchaseId(string $id): Style {
        $this->purchase_id = $id;
        return $this;
    }
    public function setFont(string $font): Style {
        $this->font = $font;
        return $this;
    }
    public function setFontSize(string $fontSize): Style {
        $this->fontSize = $fontSize;
        return $this;
    }
    public function setFontColor(string $fontColor): Style {
        $this->fontColor = $fontColor;
        return $this;
    }
    public function setBackground(string $background): Style {
        $this->background = $background;
        return $this;
    }
}