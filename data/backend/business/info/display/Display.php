<?php

namespace business\info\display;

use business\info\operation\Operation;

interface Display
{
    public function getValue(): ?string;
    public function getLabel(): string;
    public function getHTML(?string $children = null): string;
    public function setOperation(Operation $o): Display;
}
