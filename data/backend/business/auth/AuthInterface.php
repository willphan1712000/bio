<?php

namespace business\auth;

interface AuthInterface
{
    /**
     * This function handles checking if the user is signed in or not
     */
    public function auth(): bool;

    /**
     * This function handles generating auth information
     */
    public function generateAuth(): bool | string;
}
