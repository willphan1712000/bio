<?php

namespace business\wp;

use config\SystemConfig;
use config\TalkToOtherServer;

class Privacy
{
    protected const Page_ID = 2246;
    protected string $endpoint;
    protected TalkToOtherServer $talkToOther;

    public function __construct()
    {
        $this->endpoint = SystemConfig::globalVariables()['company_domain'] . "/wp-json/wp/v2/pages/" . self::Page_ID;
        $this->talkToOther = TalkToOtherServer::getInstance();
    }

    public function get()
    {
        $res = $this->talkToOther->get(
            $this->endpoint,
        );

        return json_decode($res, true)['content']['rendered'];
    }
}
