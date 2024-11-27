<?php

namespace persistence\Entity;

use Doctrine\Common\Collections\Collection;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping\Id;
use Doctrine\ORM\Mapping\Table;
use Doctrine\ORM\Mapping\Column;
use Doctrine\ORM\Mapping\Entity;
use Doctrine\ORM\Mapping\OneToMany;

#[Entity()]
#[Table('StyleDefault')]
class StyleDefault extends EntityFunction
{
    #[OneToMany(targetEntity: 'Style', mappedBy: 'StyleDefault', cascade: ['persist', 'remove'])]
    protected Collection $Style;
    #[OneToMany(targetEntity: 'Template', mappedBy: 'StyleDefault', cascade: ['persist', 'remove'])]
    protected Collection $Template;
    #[OneToMany(targetEntity: 'User', mappedBy: 'StyleDefault', cascade: ['persist', 'remove'])]
    protected Collection $User;

    #[Id, Column(name: 'template_id')]
    protected int $template_id;
    #[Column(name: 'name', nullable: true)]
    protected ?string $name;
    #[Column(name: 'image', nullable: true)]
    protected ?string $image;
    #[Column(name: 'description', nullable: true)]
    protected ?string $description;
    #[Column(name: 'font', nullable: true)]
    protected ?string $font;
    #[Column(name: 'fontSize', nullable: true)]
    protected ?string $fontSize;
    #[Column(name: 'fontColor', nullable: true)]
    protected ?string $fontColor;
    #[Column(name: 'background', nullable: true)]
    protected ?string $background;
    #[Column(name: 'price', nullable: true)]
    protected ?float $price;

    function __construct()
    {
        $this->Style = new ArrayCollection();
    }

    public function getTemplateId(): int
    {
        return $this->template_id;
    }
    public function getFont(): string
    {
        return $this->font;
    }
    public function getFontSize(): string
    {
        return $this->fontSize;
    }
    public function getFontColor(): string
    {
        return $this->fontColor;
    }
    public function getBackground(): string
    {
        return $this->background;
    }
    public function getPrice(): float
    {
        return $this->price;
    }

    public function setTemplateId(int $id): StyleDefault
    {
        $this->template_id = $id;
        return $this;
    }
    public function setFont(string $font): StyleDefault
    {
        $this->font = $font;
        return $this;
    }
    public function setFontSize(string $fontSize): StyleDefault
    {
        $this->fontSize = $fontSize;
        return $this;
    }
    public function setFontColor(string $fontColor): StyleDefault
    {
        $this->fontColor = $fontColor;
        return $this;
    }
    public function setBackground(string $background): StyleDefault
    {
        $this->background = $background;
        return $this;
    }
    public function setPrice(float $price): StyleDefault
    {
        $this->price = $price;
        return $this;
    }
    public function setStyle(Style $Style): StyleDefault
    {
        $Style->setStyleDefault($this);
        $this->Style->add($Style);
        return $this;
    }
    public function setTemplate(Template $template): StyleDefault
    {
        $template->setStyleDefault($this);
        $this->Template->add($template);
        return $this;
    }
    public function setUser(User $user): StyleDefault
    {
        $user->setStyleDefault($this);
        $this->User->add($user);
        return $this;
    }
}
