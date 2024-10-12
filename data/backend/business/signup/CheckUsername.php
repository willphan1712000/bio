<?php
    namespace business\signup;
    require_once __DIR__.'/SignupHandler.php';
    use business\signup\SignupHandler;
    require_once __DIR__.'/Input.php';
    use business\signup\Input;
    require_once __DIR__.'/../UserManagement.php';
    use business\UserManagement;

    class CheckUsername extends SignupHandler {
        function __construct(?SignupHandler $next) {
            parent::__construct($next);
        }

        public function doHandle(Input $input): bool {
            $username = str_replace(' ', '', $input->getUsername());
            return !UserManagement::isUserExist($username);
        }
    }