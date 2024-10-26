<?php
namespace business\info;

interface InfoElement {
    public function validate(?Operation $operation, Info $info): bool;
    public function format(?Operation $operation, Info $info): string;
}