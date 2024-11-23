<?php
    namespace business\api\user;
    require_once __DIR__.'/SignupHandler.php';
    require_once __DIR__.'/Input.php';
    require_once __DIR__.'/../../../../../../vendor/autoload.php';
    use business\api\user\SignupHandler;
    use business\api\user\Input;
    use persistence\Entity\Template;
    use persistence\Entity\User;
    use persistence\Entity\UserInfo;
    use persistence\Entity\UserPhone;
    use persistence\Entity\UserSocial;
    use persistence\EntityManager;

    class Push extends SignupHandler {
        function __construct(?SignupHandler $next) {
            parent::__construct($next);
        }

        public function doHandle(Input $input): bool {
            try {
                $username = $input->getUsername();
                $password = $input->getPassword();
                $email = $input->getEmail();
                
                $user = new User();
                $userInfo = new UserInfo();
                $userPhone = new UserPhone();
                $userSocial = new UserSocial();
                $template = new Template();

                $user->setUsername($username);
                $user->setPassword($password);
                $user->setEmail($email);

                $userInfo->setUsername($username);
                $userPhone->setUsername($username);
                $userSocial->setUsername($username);
                $template->setUsername($username);
                $template->setTemplateId(0);

                $user->setUserInfo($userInfo);
                $user->setUserPhone($userPhone);
                $user->setUserSocial($userSocial);
                $user->setTemplate($template);

                $entityManager = EntityManager::getEntityManager();
                $entityManager->persist($user);
                $entityManager->flush();
    
                return true;
            } catch (\Exception $e) {
                echo $e->getMessage();
                return false;
            }
        }
    }