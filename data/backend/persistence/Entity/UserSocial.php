<?php
namespace persistence\Entity;

use Doctrine\ORM\Mapping\Id;
use Doctrine\ORM\Mapping\Table;
use Doctrine\ORM\Mapping\Column;
use Doctrine\ORM\Mapping\Entity;
use Doctrine\ORM\Mapping\OneToOne;
use Doctrine\ORM\Mapping\JoinColumn;

#[Entity]
#[Table('UserSocial')]
class UserSocial extends EntityFunction {
    #[Id, Column(name: 'username', nullable: false)]
    protected $username;

    #[Id, OneToOne(targetEntity: 'User', inversedBy: 'UserInfo')]
    #[JoinColumn(name: 'username', referencedColumnName: 'username', onDelete: 'CASCADE')]
    protected $User;

    #[Column(name: 'Facebook', nullable: true)]
    protected string $Facebook;
    #[Column(name: 'Instagram', nullable: true)]
    protected string $Instagram;
    #[Column(name: 'Messenger', nullable: true)]
    protected string $Messenger;
    #[Column(name: 'X', nullable: true)]
    protected string $X;
    #[Column(name: 'Tiktok', nullable: true)]
    protected string $Tiktok;
    #[Column(name: 'Youtube', nullable: true)]
    protected string $Youtube;
    #[Column(name: 'Threads', nullable: true)]
    protected string $Threads;
    #[Column(name: 'Linkedin', nullable: true)]
    protected string $Linkedin;
    #[Column(name: 'Pinterest', nullable: true)]
    protected string $Pinterest;
    #[Column(name: 'Zalo', nullable: true)]
    protected string $Zalo;
    #[Column(name: 'Booking', nullable: true)]
    protected string $Booking;
    #[Column(name: 'OrderOnline', nullable: true)]
    protected string $OrderOnline;
    #[Column(name: 'HotSale', nullable: true)]
    protected string $HotSale;
    #[Column(name: 'Website', nullable: true)]
    protected string $Website;

    public function getUser() : User {
        return $this->User;
    }
    public function setUser(User $User): UserSocial {
        $this->User = $User;
        return $this;
    }
    public function getUsername(): string {
        return $this->username;
    }

    public function getFacebook(): string {
        return $this->Facebook;
    }
    public function getInstagram(): string {
        return $this->Instagram;
    }
    public function getX(): string {
        return $this->X;
    }
    public function getMessenger(): string {
        return $this->Messenger;
    }
    public function getTiktok(): string {
        return $this->Tiktok;
    }
    public function getYoutube(): string {
        return $this->Youtube;
    }
    public function getThreads(): string {
        return $this->Threads;
    }
    public function getLinkedin(): string {
        return $this->Linkedin;
    }
    public function getPinterest(): string {
        return $this->Pinterest;
    }
    public function getZalo(): string {
        return $this->Zalo;
    }
    public function getBooking(): string {
        return $this->Booking;
    }
    public function getOrderOnline(): string {
        return $this->OrderOnline;
    }
    public function getHotSale(): string {
        return $this->HotSale;
    }
    public function getWebsite(): string {
        return $this->Website;
    }

    public function setUsername(string $username): UserSocial {
        $this->username = $username;
        return $this;
    }
    public function setFacebook(string $Facebook): UserSocial {
        $this->Facebook = $Facebook;
        return $this;
    }
    public function setInstagram(string $Instagram): UserSocial {
        $this->Instagram = $Instagram;
        return $this;
    }
    public function setMessenger(string $Messenger): UserSocial {
        $this->Messenger = $Messenger;
        return $this;
    }
    public function setX(string $X): UserSocial {
        $this->X = $X;
        return $this;
    }
    public function setTiktok(string $Tiktok): UserSocial {
        $this->Tiktok = $Tiktok;
        return $this;
    }
    public function setYoutube(string $Youtube): UserSocial {
        $this->Youtube = $Youtube;
        return $this;
    }
    public function setThreads(string $Threads): UserSocial {
        $this->Threads = $Threads;
        return $this;
    }
    public function setLinkedin(string $Linkedin): UserSocial {
        $this->Linkedin = $Linkedin;
        return $this;
    }
    public function setPinterest(string $Pinterest): UserSocial {
        $this->Pinterest = $Pinterest;
        return $this;
    }
    public function setZalo(string $Zalo): UserSocial {
        $this->Zalo = $Zalo;
        return $this;
    }
    public function setBooking(string $Booking): UserSocial {
        $this->Booking = $Booking;
        return $this;
    }
    public function setOrderOnline(string $OrderOnline): UserSocial {
        $this->OrderOnline = $OrderOnline;
        return $this;
    }
    public function setHotSale(string $HotSale): UserSocial {
        $this->HotSale = $HotSale;
        return $this;
    }
    public function setWebsite(string $Website): UserSocial {
        $this->Website = $Website;
        return $this;
    }
}