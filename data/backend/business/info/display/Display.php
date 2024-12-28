<?php

namespace business\info\display;

interface Display
{
    public function getValue(): ?string;
    public function getLabel(): string;
    public function getHTML(?string $children = null): string;
}
