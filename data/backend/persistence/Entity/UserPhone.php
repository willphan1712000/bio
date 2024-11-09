<?php
namespace persistence\Entity;

use Doctrine\ORM\Mapping\Id;
use Doctrine\ORM\Mapping\Table;
use Doctrine\ORM\Mapping\Column;
use Doctrine\ORM\Mapping\Entity;
use Doctrine\ORM\Mapping\OneToOne;
use Doctrine\ORM\Mapping\JoinColumn;

#[Entity]
#[Table('UserPhone')]
class UserPhone {
    #[Id, Column(name: 'username', nullable: false)]
    private $username;

    #[Id, OneToOne(targetEntity: 'User', inversedBy: 'UserPhone')]
    #[JoinColumn(name: 'username', referencedColumnName: 'username', onDelete: 'CASCADE')]
    private $User;

    #[Column(name: 'Mobile', nullable: true)]
    private string $Mobile;
    #[Column(name: 'MobileCode', nullable: true)]
    private string $MobileCode;
    #[Column(name: 'MobileFlag', nullable: true)]
    private string $MobileFlag;
    #[Column(name: 'Work', nullable: true)]
    private string $Work;
    #[Column(name: 'WorkCode', nullable: true)]
    private string $WorkCode;
    #[Column(name: 'WorkFlag', nullable: true)]
    private string $WorkFlag;

    public function getUser() : User {
        return $this->User;
    }
    public function setUser(User $User): UserPhone {
        $this->User = $User;
        return $this;
    }
    public function getUsername(): string {
        return $this->username;
    }
    public function getMobile(): string {
        return $this->Mobile;
    }
    public function getMobileCode(): string {
        return $this->MobileCode;
    }
    public function getMobileFlag(): string {
        return $this->MobileFlag;
    }
    public function getWork(): string {
        return $this->Work;
    }
    public function getWorkCode(): string {
        return $this->WorkCode;
    }
    public function getWorkFlag(): string {
        return $this->WorkFlag;
    }

    public function setUsername(string $username): UserPhone {
        $this->username = $username;
        return $this;
    }
    public function setMobile(string $Mobile) : UserPhone {
        $this->Mobile = $Mobile;
        return $this;
    }
    public function setMobileCode(string $MobileCode) : UserPhone {
        $this->MobileCode = $MobileCode;
        return $this;
    }
    public function setMobileFlag(string $MobileFlag) : UserPhone {
        $this->MobileFlag = $MobileFlag;
        return $this;
    }
    public function setWork(string $Work) : UserPhone {
        $this->Work = $Work;
        return $this;
    }
    public function setWorkCode(string $WorkCode) : UserPhone {
        $this->WorkCode = $WorkCode;
        return $this;
    }
    public function setWorkFlag(string $WorkFlag) : UserPhone {
        $this->WorkFlag = $WorkFlag;
        return $this;
    }

}