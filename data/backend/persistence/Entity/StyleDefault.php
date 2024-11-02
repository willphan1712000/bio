<?php
namespace persistence\Entity;

use Doctrine\ORM\Mapping\Id;
use Doctrine\ORM\Mapping\Table;
use Doctrine\ORM\Mapping\Column;
use Doctrine\ORM\Mapping\Entity;

#[Entity()]
#[Table('StyleDefault')]
class StyleDefault {
    #[Id, Column(name: 'template_id')]
    private int $template_id;
    #[Id, Column(name: 'font')]
    private int $font;
    #[Id, Column(name: 'fontSize')]
    private int $fontSize;
    #[Id, Column(name: 'fontColor')]
    private int $fontColor;
    #[Id, Column(name: 'background')]
    private int $background;

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
}