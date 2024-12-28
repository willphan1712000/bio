<?php

namespace business\info;

interface InfoElement
{
    public function validate($name, $info): bool;
    public function format(?string $info): ?string;

    public function handle(Info $info): bool;
    public function adminGET(Info $info): bool;
    public function userGET(Info $info): bool;

    public function doHandle(Info $info): bool;
    public function doAdminGET(Info $info): bool;
    public function doUserGET(Info $info): bool;
}
