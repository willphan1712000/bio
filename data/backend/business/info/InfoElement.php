<?php
namespace business\info;

interface InfoElement {
    public function validate(Operation $operation): bool;
    public function format(Operation $operation): string;
}