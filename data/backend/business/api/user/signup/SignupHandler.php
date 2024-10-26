<?php
    namespace business\api\user;
    abstract class SignupHandler {
        private ?SignupHandler $signup;

        function __construct(?SignupHandler $next) {
            $this->signup = $next;
        }

        public function handle(Input $input): bool {
            if(!$this->doHandle($input)) {
                return false;
            }
            if($this->signup != null) {
                return $this->signup->handle($input);
            } else {
                return true;
            }
        }

        public abstract function doHandle(Input $input): bool;
    }