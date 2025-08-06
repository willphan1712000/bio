<?php

namespace api;

class APIRouter
{
    private Request $request;
    private Response $response;
    private $routes = [];

    public function __construct(Request $request, Response $response)
    {
        $this->request = $request;
        $this->response = $response;
    }

    public static function api_work()
    {
        if (str_starts_with($_SERVER['REQUEST_URI'], '/api/')) {
            $api_router = new APIRouter(new Request(), new Response());
            $api_router->get("/api/woo/product", 'business\woocommerce\ProductController@getAll');
            $api_router->get('/api/woo/product/{id}', 'business\woocommerce\ProductController@getWithId');

            $api_router->get('/api/branches', 'business\beautyBooking\BranchesController@get');

            $api_router->get('/api/template/manage', 'business\templateManagement\TemplateController@get');
            $api_router->get('/api/template/manage/url', 'business\templateManagement\TemplateController@getTemplateServerURL');
            $api_router->post('/api/template/manage', 'business\templateManagement\TemplateController@post');
            $api_router->put('/api/template/manage/{id}', 'business\templateManagement\TemplateController@put');
            $api_router->delete('/api/template/manage/{id}', 'business\templateManagement\TemplateController@delete');

            $api_router->get('/api/analytics', 'business\analytics\AnalyticsController@get');
            $api_router->get('/api/analytics/social', 'business\analytics\AnalyticsController@getUserSocial');

            $api_router->post('/api/auth', 'business\AuthController@post');

            $api_router->resolve();

            exit;
        }
    }

    /**
     * This function is for adding route to routes
     * @param method: method of the request (GET, POST, PUT, DELETE)
     * @param endpoint: api url (/api/product/...)
     * @param hanlder: api hanlder - resolver to resolve a request
     */
    private function addRoute($method, $endpoint, $handler)
    {
        $this->routes[] = compact('method', 'endpoint', 'handler');
    }

    /**
     * This function can be get, post, put, delete
     * @param method: name of the method, can be get, post, put, delete
     * @param args: the rest of the arguments
     */
    public function __call($method, $args)
    {
        $this->addRoute(strtoupper($method), ...$args);
    }

    public function resolve()
    {
        // Loop over all routes
        foreach ($this->routes as $route) {
            $pattern = preg_replace('/\{[^\}]+\}/', '([0-9]+)', $route['endpoint']);
            // Identify which route and which method to use
            if ($this->request->getMethod() === $route['method'] && preg_match("#^$pattern$#", $this->request->getEndpoint(), $matches)) {
                $handlerParts = explode('@', $route['handler']);
                $controllerName = $handlerParts[0];
                $methodName = $handlerParts[1];
                $controller = new $controllerName($this->request, $this->response);

                array_shift($matches);
                return call_user_func_array([$controller, $methodName], $matches);
            }
        }

        $this->response->setStatusCode(404)->json(['error' => 'Not Found']);
    }
}

/**
 * Request should have header and body
 */
class Request
{
    public function getEndpoint()
    {
        return strtok($_SERVER['REQUEST_URI'], "?");
    }

    public function getMethod()
    {
        return $_SERVER['REQUEST_METHOD'];
    }

    public function getBody()
    {
        return json_decode(file_get_contents("php://input"), true);
    }
}

/**
 * Response should have response status code and data
 */
class Response
{
    public function setStatusCode($code)
    {
        http_response_code($code);
        return $this;
    }

    public function json($data)
    {
        header('Access-Control-Allow-Origin');
        header('Content-Type: application/json');
        echo json_encode($data);
        return $this;
    }
}
