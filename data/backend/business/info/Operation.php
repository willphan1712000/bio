<?php
namespace business\info;

interface Operation {
    public function validate($info): bool;
    public function format($info): string;
}