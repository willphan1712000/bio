<?php

namespace business\info;

interface Operation
{
    public function validate($info): bool; // Run validate when pushing information from user to database
    public function format($info): string; // Run format when pulling information to user from database
}
