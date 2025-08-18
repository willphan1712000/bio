<?php

namespace persistence\Entity;

use DateTime;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping\Id;
use Doctrine\ORM\Mapping\Table;
use Doctrine\ORM\Mapping\Column;
use Doctrine\ORM\Mapping\Entity;
use Doctrine\ORM\Mapping\JoinColumn;
use Doctrine\ORM\Mapping\ManyToOne;
use Doctrine\ORM\Mapping\OneToOne;
use Doctrine\ORM\Mapping\OneToMany;

#[Entity]
#[Table('User')]
class User extends EntityFunction
{
    #[Id, Column(name: 'username', nullable: false)]
    protected string $username;

    #[OneToOne(targetEntity: 'UserInfo', mappedBy: 'User', cascade: ['persist'])]
    protected $UserInfo;
    #[OneToOne(targetEntity: 'UserPhone', mappedBy: 'User', cascade: ['persist'])]
    protected $UserPhone;
    #[OneToOne(targetEntity: 'UserSocial', mappedBy: 'User', cascade: ['persist'])]
    protected $UserSocial;
    #[OneToMany(targetEntity: 'Purchase', mappedBy: 'User', cascade: ['persist'])]
    protected Collection $Purchase;
    #[OneToMany(targetEntity: 'Template', mappedBy: 'User', cascade: ['persist'])]
    protected Collection $Template;
    #[OneToMany(targetEntity: 'Style', mappedBy: 'User', cascade: ['persist'])]
    protected Collection $Style;
    // #[ManyToOne(targetEntity: 'StyleDefault', inversedBy: 'User', cascade: ['persist'])]
    // #[JoinColumn(name: 'defaultTemplate', referencedColumnName: 'template_id')]
    // protected $StyleDefault;

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
        $this->Template = new ArrayCollection();
        $this->Purchase = new ArrayCollection();
        $this->Style = new ArrayCollection();
    }

    public function getUserInfo(): UserInfo
    {
        return $this->UserInfo;
    }
    public function setUserInfo(UserInfo $UserInfo): User
    {
        $UserInfo->setUser($this);
        $this->UserInfo = $UserInfo;
        return $this;
    }
    public function getUserPhone(): UserPhone
    {
        return $this->UserPhone;
    }
    public function setUserPhone(UserPhone $UserPhone): User
    {
        $UserPhone->setUser($this);
        $this->UserPhone = $UserPhone;
        return $this;
    }
    public function getUserSocial(): UserSocial
    {
        return $this->UserSocial;
    }
    public function setUserSocial(UserSocial $UserSocial): User
    {
        $UserSocial->setUser($this);
        $this->UserSocial = $UserSocial;
        return $this;
    }
    public function getTemplate(): Collection
    {
        return $this->Template;
    }
    public function setTemplate(Template $Template): User
    {
        $Template->setUser($this);
        $this->Template->add($Template);
        return $this;
    }
    public function getUsername(): string
    {
        return $this->username;
    }
    public function setUsername(string $username): User
    {
        $this->username = $username;
        return $this;
    }
    public function getPassword(): string
    {
        return $this->password;
    }
    public function setPassword(string $password): User
    {
        $this->password = $password;
        return $this;
    }
    public function getEmail(): string
    {
        return $this->email;
    }
    public function setEmail(string $email): User
    {
        $this->email = $email;
        return $this;
    }
    public function getToken(): string
    {
        return $this->token;
    }
    public function setToken(string $token): User
    {
        $this->token = $token;
        return $this;
    }
    public function getDeleteToken(): string
    {
        return $this->deleteToken;
    }
    public function setDeleteToken(string $deleteToken): User
    {
        $this->deleteToken = $deleteToken;
        return $this;
    }
    public function setPurchase(Purchase $Purchase): User
    {
        $Purchase->setUser($this);
        $this->Purchase->add($Purchase);
        return $this;
    }
    public function setStyle(Style $Style): User
    {
        $Style->setUser($this);
        $this->Style->add($Style);
        return $this;
    }
    // public function setStyleDefault(StyleDefault $styleDefault): User
    // {
    //     $this->StyleDefault = $styleDefault;
    //     return $this;
    // }
}
