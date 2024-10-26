<?php
namespace business\info;

interface Operation {
    public function validate(InfoElement $infoElement);
    public function format(InfoElement $infoElement);
}