<?php
namespace business\info;

class Info {
    private array $info;

    function __construct(array $info) {
        $this->info = $info;
    }

    public function getInfo(): array {
        return $this->info;
    }
}