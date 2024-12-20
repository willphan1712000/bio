<?php

namespace business\info;

use config\SystemConfig;

abstract class InfoHandler implements InfoElement
{
    private ?InfoHandler $info;
    protected string $name;

    function __construct(?InfoHandler $next)
    {
        $this->info = $next;
    }

    public function handle(Info $info): bool
    {
        if (!$this->doHandle($info)) {
            return false;
        }
        if ($this->info != null) {
            return $this->info->handle($info);
        } else {
            return true;
        }
    }

    public function adminGET(Info $info): bool
    {
        if (!$this->doAdminGET($info)) {
            return false;
        }
        if ($this->info != null) {
            return $this->info->adminGET($info);
        } else {
            return true;
        }
    }

    public function userGET(Info $info): bool
    {
        if (!$this->doUserGET($info)) {
            return false;
        }
        if ($this->info != null) {
            return $this->info->userGET($info);
        } else {
            return true;
        }
    }

    public function doHandle(Info $info): bool
    {
        if ($this->validate($this->name, $info->getInfo($this->name))) {
            $info->setInfo($this->name, $info->getInfo($this->name));
            return $this->setValueToDatabase($this->name, $info->getInfo($this->name), $info->getInfo('username'));
        }
        return false;
    }

    public function doAdminGET(Info $info): bool
    {
        $value = $this->getValueFromDatabase($this->name, $info->getInfo('username'));
        $info->setInfo($this->name, $value);
        return true;
    }

    public function doUserGET(Info $info): bool
    {
        $value = $this->getValueFromDatabase($this->name, $info->getInfo('username'));
        $info->setInfo($this->name, $this->format($value));
        return true;
    }

    // This algorithm might change in the future when we utilize AI to validate the information that is safe for work
    public function validate($name, $info): bool
    {
        if (empty($info)) {
            return true;
        }
        if (!preg_match(SystemConfig::regexMap()[$name], $info)) {
            throw new \Exception($name . " is not valid");
        }
        return true;
    }

    public function format(?string $info): ?string
    {
        return $info;
    }

    protected abstract function getValueFromDatabase(string $getWhat, string $username): ?string;
    protected abstract function setValueToDatabase(string $setWhat, ?string $value, string $username): bool;
}
