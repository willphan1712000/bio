<?php
    namespace business\api\user;
    require_once __DIR__.'/SignupHandler.php';
    require_once __DIR__.'/Input.php';
    require_once __DIR__.'/../../../../../core.php';
    use business\api\user\SignupHandler;
    use business\api\user\Input;
    use config\SystemConfig;

    class CreateFolder extends SignupHandler {
        function __construct(?SignupHandler $next) {
            parent::__construct($next);
        }

        public function doHandle(Input $input): bool {
            $path = SystemConfig::globalVariables()['user_folder'].$input->getUsername(); // get path to folder
            if(!is_dir($path)) {
                if(mkdir($path, 0755, true)) {
                    $createFolderSuccess = true;
                }
            } else {
                $createFolderSuccess = false;
            }
            return $createFolderSuccess;
        }
    }