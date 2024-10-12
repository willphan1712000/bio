<?php
    namespace business\signup;
    require_once __DIR__.'/SignupHandler.php';
    require_once __DIR__.'/Input.php';
    use business\signup\SignupHandler;
    use business\signup\Input;

    class CheckEmail extends SignupHandler {
        function __construct(?SignupHandler $next) {
            parent::__construct($next);
        }

        public function doHandle(Input $input): bool {
            return filter_var($input->getEmail(), FILTER_VALIDATE_EMAIL);
        }
    }