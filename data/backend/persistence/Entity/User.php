<?php
namespace persistence\Entity;

use Doctrine\ORM\Mapping\Column;
use Doctrine\ORM\Mapping\Entity;
use Doctrine\ORM\Mapping\Id;
use Doctrine\ORM\Mapping\OneToMany;
use Doctrine\ORM\Mapping\OneToOne;
use Doctrine\ORM\Mapping\Table;

#[Entity]
#[Table('User')]
class User {
    #[Id, Column(name: 'username')]
    private string $username;
    
    #[OneToOne(targetEntity: 'UserInfo', mappedBy: 'User', cascade: ['persist', 'remove'])]
    private $UserInfo;
    #[OneToOne(targetEntity: 'UserPhone', mappedBy: 'User', cascade: ['persist', 'remove'])]
    private $UserPhone;
    #[OneToOne(targetEntity: 'UserSocial', mappedBy: 'User', cascade: ['persist', 'remove'])]
    private $UserSocial;
    #[OneToMany(targetEntity: 'Purchase', mappedBy: 'User', cascade: ['persist', 'remove'])]
    private $Purchase;
    #[OneToOne(targetEntity: 'Template', mappedBy: 'User', cascade: ['persist', 'remove'])]
    private $Template;

    #[Column(name: 'password')]
    private string $password;

    #[Column(name: 'email')]
    private string $email;

    #[Column(name: 'token')]
    private string $token;

    #[Column(name: 'deleteToken')]
    private string $deleteToken;

    public function getUsername(): string {
        return $this->username;
    }
    public function setUsername(string $username): User {
        $this->username = $username;
        return $this;
    }
    public function getPassword(): string {
        return $this->password;
    }
    public function setPassword(string $password): User {
        $this->password = $password;
        return $this;
    }
    public function getEmail(): string {
        return $this->email;
    }
    public function setEmail(string $email): User {
        $this->email = $email;
        return $this;
    }
    public function getToken(): string {
        return $this->token;
    }
    public function setToken(string $token): User {
        $this->token = $token;
        return $this;
    }
    public function getDeleteToken(): string {
        return $this->deleteToken;
    }
    public function setDeleteToken(string $deleteToken): User {
        $this->deleteToken = $deleteToken;
        return $this;
    }
}