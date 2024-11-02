<?php
namespace persistence\Entity;

use Doctrine\ORM\Mapping\Column;
use Doctrine\ORM\Mapping\Entity;
use Doctrine\ORM\Mapping\Id;
use Doctrine\ORM\Mapping\Table;

#[Entity]
#[Table('UserSocial')]
class UserSocial {
    #[Id, Column(name: 'username')]
    private string $username;
    #[Column(name: 'Facebook')]
    private string $Facebook;
    #[Column(name: 'Instagram')]
    private string $Instagram;
    #[Column(name: 'Messenger')]
    private string $Messenger;
    #[Column(name: 'X')]
    private string $X;
    #[Column(name: 'Tiktok')]
    private string $Tiktok;
    #[Column(name: 'Youtube')]
    private string $Youtube;
    #[Column(name: 'Threads')]
    private string $Threads;
    #[Column(name: 'Linkedin')]
    private string $Linkedin;
    #[Column(name: 'Pinterest')]
    private string $Pinterest;
    #[Column(name: 'Zalo')]
    private string $Zalo;
    #[Column(name: 'Booking')]
    private string $Booking;
    #[Column(name: 'OrderOnline')]
    private string $OrderOnline;
    #[Column(name: 'HotSale')]
    private string $HotSale;

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
}