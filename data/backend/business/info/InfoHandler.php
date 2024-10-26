<?php
    namespace business\info;

    abstract class InfoHandler {
        private ?InfoHandler $info;

        function __construct(?InfoHandler $next) {
            $this->info = $next;
        }

        public function handle(Info $info): bool {
            if(!$this->doHandle($info)) {
                return false;
            }
            if($this->info != null) {
                return $this->info->handle($info);
            } else {
                return true;
            }
        }

        public abstract function doHandle(Info $info): bool;
    }