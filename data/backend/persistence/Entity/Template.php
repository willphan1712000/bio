<?php
namespace persistence\Entity;

use Doctrine\ORM\Mapping\Column;
use Doctrine\ORM\Mapping\Entity;
use Doctrine\ORM\Mapping\Id;
use Doctrine\ORM\Mapping\Table;

#[Entity]
#[Table('Template')]
class Template {
    #[Id, Column(name: 'username')]
    private string $username;
    #[Column(name: 'themeid')]
    private int $themeid;
    #[Column(name: 'favorite')]
    private string $favorite;

    public function getUsername(): string {
        return $this->username;
    }
    public function getThemeId(): int {
        return $this->themeid;
    }
    public function getFavorite(): string {
        return $this->favorite;
    }

    public function setUsername(string $username): Template {
        $this->username = $username;
        return $this;
    }
    public function setThemeId(int $themeid) : Template {
        $this->themeid = $themeid;
        return $this;
    }
    public function setFarovite(int $favorite) : Template {
        $this->favorite = $favorite;
        return $this;
    }
}