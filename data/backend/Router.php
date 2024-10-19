<?php
require_once __DIR__."/../core.php";
use config\SystemConfig as config;
require_once __DIR__."/../backend/business/UserManagement.php";
use business\UserManagement;

interface IRouter {
    function addRoute($uri, $controller);
    function route($uri);
    function abort();
    function removeLastRoute();
}

class Router {
    private $routes = [];

    function addRoute($uri, $controller) {
        $this->routes[] = [
            'uri' => $uri,
            'controller' => $controller
        ];
    }

    function route($uri) {
        $base = config::URLExtraction();
        $at = substr($base, 0, 1); // Get the first character of the uri
        // If the first character is @ or the landing page "/", go look for a system uri. Otherwise, go look for a user uri
        if($at == '@' || $at == '') {
            foreach($this->routes as $route) {
                if($route['uri'] === $uri) {
                    return require $route['controller'];
                }
            }
        } else {
            if($base !== "admin") {
                if(UserManagement::isUserExist($base)) {
                    return require __DIR__.'/../../dist/user.php';
                }
            } else {
                $user = explode("/", parse_url($_SERVER['REQUEST_URI'])['path'])[1];
                if(UserManagement::isUserExist($user)) {
                    return require __DIR__.'/../../dist/admin.php';
                }
            }
        }

        $this->abort();
    }

    private function abort() {
        http_response_code(404);
        require 'dist/404.php';
        die();
    }

    function removeLastRoute() {
        array_pop($this->routes);
    }
}