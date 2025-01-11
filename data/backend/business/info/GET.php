<?php

namespace business\info;

use business\IAPI;
use business\info\Info;

class GET implements IAPI
{
    private string $username;

    public function __construct(string $username)
    {
        $this->username = $username;
    }

    private function get()
    {
        try {
            $info = new Info([]);
            $info->setInfo('username', $this->username);

            // $userSocialHandler = new Booking(new Facebook(new HotSale(new Instagram(new Linkedin(new Messenger(new OrderOnline(new Pinterest(new Threads(new Tiktok(new Website(new X(new Youtube(new Zalo(null))))))))))))));
            // // Handle user phone number
            // $userPhoneHandler = new Mobile(new Work(new HotLine(new Viber($userSocialHandler))));
            // // Handle user information
            // $userInfoHandler = new Name(new Avatar(new Organization(new Description(new Email(new Address($userPhoneHandler))))));

            $userInfoHandler = InfoChainHandler::getInstance(null);

            $get = $userInfoHandler->adminGET($info);

            return [
                'success' => $get,
                'data' => $info->getEntireInfo()
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
        return $this->get();
    }
}
