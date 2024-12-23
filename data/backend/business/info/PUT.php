<?php

namespace business\info;

use business\IAPI;
use business\info\Info;
use business\info\Vcard;
use business\info\social\X;
use business\info\user\Name;
use business\info\phone\Work;
use business\info\user\Email;
use business\info\social\Zalo;
use business\info\user\Avatar;
use business\info\phone\Mobile;
use business\info\phone\Viber;
use business\info\user\Address;
use business\info\social\Tiktok;
use business\info\social\Booking;
use business\info\phone\HotLine;
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

class PUT implements IAPI
{
    private Info $info;

    function __construct(Info $info)
    {
        $this->info = $info;
    }

    private function infoProcess()
    {
        try {
            // Handle push to database and create Vcard
            $user = new Vcard(null);
            // Handle user social
            $userSocialHandler = new Booking(new Facebook(new HotSale(new Instagram(new Linkedin(new Messenger(new OrderOnline(new Pinterest(new Threads(new Tiktok(new Website(new X(new Youtube(new Zalo($user))))))))))))));
            // Handle user phone number
            $userPhoneHandler = new Mobile(new Work(new HotLine(new Viber($userSocialHandler))));
            // Handle user information
            $userInfoHandler = new Name(new Avatar(new Organization(new Description(new Email(new Address($userPhoneHandler))))));

            $this->info->setInfo('vcard', ''); // set vcard string to empty before attaching info elements to it
            $userInfoSuccess = $userInfoHandler->handle($this->info);

            return [
                'success' => $userInfoSuccess
            ];
        } catch (\Exception $e) {
            return [
                'success' => false,
                'error' => $e->getMessage()
            ];
        }
    }

    public function execute()
    {
        return $this->infoProcess();
    }
}
