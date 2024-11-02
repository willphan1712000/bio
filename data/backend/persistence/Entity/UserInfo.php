<?php
namespace persistence\Entity;

use Doctrine\ORM\Mapping\Column;
use Doctrine\ORM\Mapping\Entity;
use Doctrine\ORM\Mapping\Id;
use Doctrine\ORM\Mapping\Table;

#[Entity]
#[Table('UserInfo')]
class UserInfo {
    #[Id, Column(name: 'username')]
    private string $username;

    #[Column(name: 'name')]
    private string $name;
    
    #[Column(name: 'image')]
    private string $image;
    
    #[Column(name: 'organization')]
    private string $organization;
    
    #[Column(name: 'description')]
    private string $description;
    
    #[Column(name: 'Email')]
    private string $Email;
    
    #[Column(name: 'Address')]
    private string $Address;

    public function getUsername(): string {
        return $this->username;
    }
    public function getName(): string {
        return $this->name;
    }
    public function getImage(): string {
        return $this->image;
    }
    public function getOrganization(): string {
        return $this->organization;
    }
    public function getDescription(): string {
        return $this->description;
    }
    public function getEmail(): string {
        return $this->Email;
    }
    public function getAddress(): string {
        return $this->Address;
    }

    public function setUsername(string $username): UserInfo {
        $this->username = $username;
        return $this;
    }
    public function setName(string $name): UserInfo {
        $this->name = $name;
        return $this;
    }
    public function setImage(string $image): UserInfo {
        $this->image = $image;
        return $this;
    }
    public function setOrganization(string $organization): UserInfo {
        $this->organization = $organization;
        return $this;
    }
    public function setDescription(string $description): UserInfo {
        $this->description = $description;
        return $this;
    }
    public function setEmail(string $Email): UserInfo {
        $this->Email = $Email;
        return $this;
    }
    public function setAddress(string $Address): UserInfo {
        $this->Address = $Address;
        return $this;
    }
}