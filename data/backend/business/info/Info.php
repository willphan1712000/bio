<?php
namespace business\info;

class Info {
    private array $info;

    function __construct(array $info) {
        $this->info = $info;
    }

    public function getInfo(string $whatToGet) {
        return $this->info[$whatToGet];
    }

    public function setInfo(string $whatToSet, $value): Info {
        $this->info[$whatToSet] = $value;
        return $this;
    }

    public function getEntireInfo(): array {
        return $this->info;
    }
}