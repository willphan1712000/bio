<?php
namespace business\info;

interface InfoElement {
    public function validate(?Operation $operation, $info): bool;
    public function format(?Operation $operation, $info): string;
}