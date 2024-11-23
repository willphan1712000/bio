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
    #[OneToOne(targetEntity: 'User', inversedBy: 'Template')]
    #[JoinColumn(name: 'username', referencedColumnName: 'username', onDelete: 'CASCADE')]
    protected $User;
    #[Column(name: 'template_id')]
    protected int $template_id;

    public function getUsername(): string {
        return $this->username;
    }
    public function getTemplateId(): int {
        return $this->template_id;
    }

    public function setUsername(string $username): Template {
        $this->username = $username;
        return $this;
    }
    public function setTemplateId(int $template_id) : Template {
        $this->template_id = $template_id;
        return $this;
    }

    public function getUser(): User {
        return $this->User;
    }

    public function setUser(User $User): Template {
        $this->User = $User;
        return $this;
    }
}