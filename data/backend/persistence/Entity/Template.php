<?php
namespace persistence\Entity;

use Doctrine\ORM\Mapping\Id;
use Doctrine\ORM\Mapping\Table;
use Doctrine\ORM\Mapping\Column;
use Doctrine\ORM\Mapping\Entity;
use Doctrine\ORM\Mapping\OneToOne;
use Doctrine\ORM\Mapping\JoinColumn;

#[Entity]
#[Table('Template')]
class Template extends EntityFunction {
    #[Id, Column(name: 'username')]
    protected string $username;
    #[Id, OneToOne(targetEntity: 'User', inversedBy: 'Template')]
    #[JoinColumn(name: 'username', referencedColumnName: 'username', onDelete: 'CASCADE')]
    protected $User;
    #[Column(name: 'template_id')]
    protected int $template_id;
    #[Column(name: 'favorite')]
    protected string $favorite;

    public function getUsername(): string {
        return $this->username;
    }
    public function getTemplateId(): int {
        return $this->template_id;
    }
    public function getFavorite(): string {
        return $this->favorite;
    }

    public function setUsername(string $username): Template {
        $this->username = $username;
        return $this;
    }
    public function setTemplateId(int $template_id) : Template {
        $this->template_id = $template_id;
        return $this;
    }
    public function setFarovite(int $favorite) : Template {
        $this->favorite = $favorite;
        return $this;
    }
}