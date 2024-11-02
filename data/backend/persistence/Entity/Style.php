<?php
namespace persistence\Entity;

use Doctrine\ORM\Mapping\Column;
use Doctrine\ORM\Mapping\Entity;
use Doctrine\ORM\Mapping\Id;
use Doctrine\ORM\Mapping\Table;

#[Entity()]
#[Table('Style')]
class Style {
    #[Id, Column(name: 'purchase_id')]
    private string $purchase_id;
    #[Column(name: 'font')]
    private string $font;
    #[Column(name: 'fontSize')]
    private string $fontSize;
    #[Column(name: 'fontColor')]
    private string $fontColor;
    #[Column(name: 'background')]
    private string $background;

    public function getPurchaseId() : string {
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

    public function setPurchasedId(string $id): Style {
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