<?php
    namespace business\signup;
    require_once __DIR__.'/SignupHandler.php';
    require_once __DIR__.'/Input.php';
    require_once __DIR__.'/../../persistence/Database.php';
    use business\signup\SignupHandler;
    use business\signup\Input;
    use persistence\Database;

    class Push extends SignupHandler {
        function __construct(?SignupHandler $next) {
            parent::__construct($next);
        }

        public function doHandle(Input $input): bool {
            $username = $input->getUsername();
            $password = $input->getPassword();
            $email = $input->getEmail();
            
            $conn = Database::preparedConnection();
            // Push to database
            $stmt_user = $conn->prepare("INSERT INTO user(username, email, password) VALUES(?,?,?)");
            $stmt_user->bind_param("sss", $username, $email, $password);
            $stmt_user->execute();

            $stmt_template = $conn->prepare("INSERT INTO template(username, themeid) VALUES(?,?)");
            $stmt_template->bind_param("ss", $username, $themeid);
            $themeid = "0";
            $stmt_template->execute();

            $stmt_info = $conn->prepare("INSERT INTO info(username) VALUES(?)");
            $stmt_info->bind_param("s", $username);
            $stmt_info->execute();
            return true;
        }
    }