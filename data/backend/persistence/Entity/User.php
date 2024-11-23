<?php
namespace persistence\Entity;

use DateTime;
use Doctrine\ORM\Mapping\Id;
use Doctrine\ORM\Mapping\Table;
use Doctrine\ORM\Mapping\Column;
use Doctrine\ORM\Mapping\Entity;
use Doctrine\ORM\Mapping\OneToOne;
use Doctrine\ORM\Mapping\OneToMany;

#[Entity]
#[Table('User')]
class User extends EntityFunction {
    #[Id, Column(name: 'username', nullable: false)]
    protected string $username;
    
    #[OneToOne(targetEntity: 'UserInfo', mappedBy: 'User', cascade: ['persist', 'remove'])]
    protected $UserInfo;
    #[OneToOne(targetEntity: 'UserPhone', mappedBy: 'User', cascade: ['persist', 'remove'])]
    protected $UserPhone;
    #[OneToOne(targetEntity: 'UserSocial', mappedBy: 'User', cascade: ['persist', 'remove'])]
    protected $UserSocial;
    #[OneToMany(targetEntity: 'Purchase', mappedBy: 'User', cascade: ['persist', 'remove'])]
    protected $Purchase;
    #[OneToOne(targetEntity: 'Template', mappedBy: 'User', cascade: ['persist', 'remove'])]
    protected $Template;

    #[Column(name: 'password', nullable: false)]
    protected string $password;

    #[Column(name: 'email', nullable: false)]
    protected string $email;

    #[Column(name: 'token', nullable: true)]
    protected ?string $token;

    #[Column(name: 'deleteToken', nullable: true)]
    protected ?string $deleteToken;

    #[Column(name: 'defaultTemplate', nullable: false)]
    protected int $defaultTemplate;

    #[Column(name: 'createdAt', type: 'datetime')]
    protected DateTime $createdAt;

    function __construct()
    {
        $this->createdAt = new DateTime();
    }

    public function getUserInfo(): UserInfo {
        return $this->UserInfo;
    }
    public function setUserInfo(UserInfo $UserInfo): User {
        $UserInfo->setUser($this);
        $this->UserInfo = $UserInfo;
        return $this;
    }
    public function getUserPhone(): UserPhone {
        return $this->UserPhone;
    }
    public function setUserPhone(UserPhone $UserPhone): User {
        $UserPhone->setUser($this);
        $this->UserPhone = $UserPhone;
        return $this;
    }
    public function getUserSocial(): UserSocial {
        return $this->UserSocial;
    }
    public function setUserSocial(UserSocial $UserSocial): User {
        $UserSocial->setUser($this);
        $this->UserSocial = $UserSocial;
        return $this;
    }
    public function getTemplate(): Template {
        return $this->Template;
    }
    public function setTemplate(Template $Template): User {
        $Template->setUser($this);
        $this->Template = $Template;
        return $this;
    }
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