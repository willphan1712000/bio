<?php
namespace persistence\Entity;

use Doctrine\ORM\Mapping\Id;
use Doctrine\ORM\Mapping\Table;
use Doctrine\ORM\Mapping\Column;
use Doctrine\ORM\Mapping\Entity;
use Doctrine\ORM\Mapping\OneToMany;

#[Entity()]
#[Table('StyleDefault')]
class StyleDefault extends EntityFunction {
    #[Id, Column(name: 'template_id')]
    protected int $template_id;
    #[OneToMany(targetEntity: 'Purchase', mappedBy: 'StyleDefault')]
    protected $Purchase;
    #[Column(name: 'font')]
    protected int $font;
    #[Column(name: 'fontSize')]
    protected int $fontSize;
    #[Column(name: 'fontColor')]
    protected int $fontColor;
    #[Column(name: 'background')]
    protected int $background;
    #[Column(name: 'price')]
    protected float $price;

    public function getTemplateId(): int {
        return $this->template_id;
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
    public function getPrice() : float {
        return $this->price;
    }

    public function setTemplateId(int $id): StyleDefault {
        $this->template_id = $id;
        return $this;
    }
    public function setFont(string $font): StyleDefault {
        $this->font = $font;
        return $this;
    }
    public function setFontSize(string $fontSize): StyleDefault {
        $this->fontSize = $fontSize;
        return $this;
    }
    public function setFontColor(string $fontColor): StyleDefault {
        $this->fontColor = $fontColor;
        return $this;
    }
    public function setBackground(string $background): StyleDefault {
        $this->background = $background;
        return $this;
    }
    public function setPrice(float $price): StyleDefault {
        $this->price = $price;
        return $this;
    }
}