<?php

namespace persistence\Entity;

use Doctrine\ORM\Mapping\Id;
use Doctrine\ORM\Mapping\Table;
use Doctrine\ORM\Mapping\Column;
use Doctrine\ORM\Mapping\Entity;
use Doctrine\ORM\Mapping\GeneratedValue;
use Doctrine\ORM\Mapping\JoinColumn;
use Doctrine\ORM\Mapping\ManyToOne;

#[Entity]
#[Table('Template')]
class Template extends EntityFunction
{
    #[ManyToOne(targetEntity: 'User', inversedBy: 'Template')]
    #[JoinColumn(name: 'username', referencedColumnName: 'username', onDelete: 'CASCADE')]
    protected $User;
    #[ManyToOne(targetEntity: 'StyleDefault', inversedBy: 'Template')]
    #[JoinColumn(name: 'template_id', referencedColumnName: 'template_id', onDelete: 'CASCADE')]
    protected $StyleDefault;

    // #[Id, Column(name: 'id'), GeneratedValue]
    // protected int $id;
    #[Id, Column(name: 'username')]
    protected string $username;
    #[Id, Column(name: 'template_id')]
    protected int $template_id;

    public function getUsername(): string
    {
        return $this->username;
    }
    public function getTemplateId(): int
    {
        return $this->template_id;
    }

    public function setUsername(string $username): Template
    {
        $this->username = $username;
        return $this;
    }
    public function setTemplateId(int $template_id): Template
    {
        $this->template_id = $template_id;
        return $this;
    }

    public function getUser(): User
    {
        return $this->User;
    }

    public function setUser(User $User): Template
    {
        $this->User = $User;
        return $this;
    }

    public function setStyleDefault(StyleDefault $styleDefault): Template
    {
        $this->StyleDefault = $styleDefault;
        return $this;
    }
}
