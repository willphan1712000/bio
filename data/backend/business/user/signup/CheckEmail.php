<?php
    namespace business\user\signup;
    use business\user\signup\SignupHandler;
use Exception;

    class CheckEmail extends SignupHandler {
        function __construct(?SignupHandler $next) {
            parent::__construct($next);
        }

        public function doHandle(Input $input): bool {
            try {
                if(filter_var($input->getEmail(), FILTER_VALIDATE_EMAIL)) {
                    return true;
                }
                throw new Exception("Validation error: email is not valid");
            } catch (\Exception $e) {
                echo $e->getMessage();
                return false;
            }
        }
    }