<?php

namespace business\info;

use business\IAPI;
use business\info\Info;
use business\info\Vcard;

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
            // $userSocialHandler = new Booking(new Facebook(new HotSale(new Instagram(new Linkedin(new Messenger(new OrderOnline(new Pinterest(new Threads(new Tiktok(new Website(new X(new Youtube(new Zalo($user))))))))))))));
            // // Handle user phone number
            // $userPhoneHandler = new Mobile(new Work(new HotLine(new Viber($userSocialHandler))));
            // // Handle user information
            // $userInfoHandler = new Name(new Avatar(new Organization(new Description(new Email(new Address($userPhoneHandler))))));

            $userInfoHandler = InfoChainHandler::getInstance($user);

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
