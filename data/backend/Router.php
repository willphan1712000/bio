<?php

class Router {
    private $routes = [];

    function addRoute($uri, $controller) {
        $this->routes[] = [
            'uri' => $uri,
            'controller' => $controller
        ];
    }

    function route($uri) {
        foreach($this->routes as $route) {
            if($route['uri'] === $uri) {
                return require $route['controller'];
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