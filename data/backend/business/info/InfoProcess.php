<?php
namespace business\info;

use business\info\social\X;
use business\info\user\Name;
use business\info\phone\Work;
use business\info\user\Email;
use business\info\social\Zalo;
use business\info\user\Avatar;
use business\info\phone\Mobile;
use business\info\user\Address;
use business\info\social\Tiktok;
use business\info\social\Booking;
use business\info\social\HotSale;
use business\info\social\Threads;
use business\info\social\Website;
use business\info\social\Youtube;
use business\info\social\Facebook;
use business\info\social\Linkedin;
use business\info\social\Instagram;
use business\info\social\Messenger;
use business\info\social\Pinterest;
use business\info\user\Description;
use business\info\user\Organization;
use business\info\social\OrderOnline;

use business\info\OperationFactory;

require_once __DIR__."/../../../../vendor/autoload.php";

class InfoProcess {
    private Info $info;
    private OperationFactory $operationFactory;

    function __construct(Info $info) {
        $this->info = $info;
        $this->operationFactory = new OperationFactory();
    }

    public function infoProcess() {
        // Handle user social
        $userSocialHandler = new Booking(new Facebook(new HotSale(new Instagram(new Linkedin(new Messenger(new OrderOnline(new Pinterest(new Threads(new Tiktok(new Website(new X(new Youtube(new Zalo(null))))))))))))));
        // Handle user phone number
        $userPhoneHandler = new Mobile(new Work($userSocialHandler));
        // Handle user information
        $userInfoHandler = new Name(new Avatar(new Organization(new Description(new Email(new Address($userPhoneHandler))))));

        $userInfoResult = $userInfoHandler->handle($this->info);

        return $userInfoResult;
    }
}