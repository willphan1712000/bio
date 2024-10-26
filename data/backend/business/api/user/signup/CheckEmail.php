<?php
    namespace business\api\user;
    require_once __DIR__.'/SignupHandler.php';
    use business\api\user\SignupHandler;

    class CheckEmail extends SignupHandler {
        function __construct(?SignupHandler $next) {
            parent::__construct($next);
        }

        public function doHandle(Input $input): bool {
            return filter_var($input->getEmail(), FILTER_VALIDATE_EMAIL);
        }
    }