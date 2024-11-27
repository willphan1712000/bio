<?php
    namespace business\user\delete;

    abstract class DeleteHandler {
        private ?DeleteHandler $signup;

        function __construct(?DeleteHandler $next) {
            $this->signup = $next;
        }

        public function handle(string $username): bool {
            if(!$this->doHandle($username)) {
                return false;
            }
            if($this->signup != null) {
                return $this->signup->handle($username);
            } else {
                return true;
            }
        }

        public abstract function doHandle(string $username): bool;
    }