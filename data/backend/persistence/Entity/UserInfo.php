<?php

namespace persistence\Entity;

use Doctrine\ORM\Mapping\Column;
use Doctrine\ORM\Mapping\Entity;
use Doctrine\ORM\Mapping\Id;
use Doctrine\ORM\Mapping\JoinColumn;
use Doctrine\ORM\Mapping\OneToOne;
use Doctrine\ORM\Mapping\Table;

#[Entity]
#[Table('UserInfo')]
class UserInfo extends EntityFunction
{
    #[Id, Column(name: 'username', nullable: false)]
    protected $username;

    #[OneToOne(targetEntity: 'User', inversedBy: 'UserInfo')]
    #[JoinColumn(name: 'username', referencedColumnName: 'username', onDelete: 'CASCADE')]
    protected $User;

    #[Column(name: 'name', nullable: true)]
    protected ?string $name;

    #[Column(name: 'image', nullable: true)]
    protected ?string $image;

    #[Column(name: 'organization', nullable: true)]
    protected ?string $organization;

    #[Column(name: 'position', nullable: true)]
    protected ?string $position;

    #[Column(name: 'description', nullable: true)]
    protected ?string $description;

    #[Column(name: 'Email', nullable: true)]
    protected ?string $Email;

    #[Column(name: 'Address', nullable: true)]
    protected ?string $Address;

    public function getUser(): User
    {
        return $this->User;
    }
    public function getUsername()
    {
        return $this->username;
    }
    public function getName(): string
    {
        return $this->name;
    }
    public function getImage(): string
    {
        return $this->image;
    }
    public function getOrganization(): string
    {
        return $this->organization;
    }
    public function getDescription(): string
    {
        return $this->description;
    }
    public function getEmail(): string
    {
        return $this->Email;
    }
    public function getAddress(): string
    {
        return $this->Address;
    }

    public function setUser(User $User): UserInfo
    {
        $this->User = $User;
        return $this;
    }
    public function setUsername($username): UserInfo
    {
        $this->username = $username;
        return $this;
    }
    public function setName(string $name): UserInfo
    {
        $this->name = $name;
        return $this;
    }
    public function setImage(string $image): UserInfo
    {
        $this->image = $image;
        return $this;
    }
    public function setOrganization(string $organization): UserInfo
    {
        $this->organization = $organization;
        return $this;
    }
    public function setDescription(string $description): UserInfo
    {
        $this->description = $description;
        return $this;
    }
    public function setEmail(string $Email): UserInfo
    {
        $this->Email = $Email;
        return $this;
    }
    public function setAddress(string $Address): UserInfo
    {
        $this->Address = $Address;
        return $this;
    }
}
