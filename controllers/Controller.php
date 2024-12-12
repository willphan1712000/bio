<?php

namespace controllers;

abstract class Controller
{
    public abstract function execute();

    public function get(string $getWhat)
    {
        return $this->$getWhat;
    }

    public function set(string $setWhat, $value): Controller
    {
        $this->$setWhat = $value;
        return $this;
    }
}
