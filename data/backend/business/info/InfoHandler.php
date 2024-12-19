<?php

namespace business\info;

abstract class InfoHandler
{
    private ?InfoHandler $info;

    function __construct(?InfoHandler $next)
    {
        $this->info = $next;
    }

    public function handle(Info $info, OperationFactory $operationFactory): bool
    {
        if (!$this->doHandle($info,  $operationFactory)) {
            return false;
        }
        if ($this->info != null) {
            return $this->info->handle($info,  $operationFactory);
        } else {
            return true;
        }
    }

    public abstract function doHandle(Info $info, OperationFactory $operationFactory): bool;

    // public abstract function format(Info $info, OperationFactory $operationFactory);
}
