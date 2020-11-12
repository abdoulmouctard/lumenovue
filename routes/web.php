<?php

use Laravel\Lumen\Routing\Router;


/** @var Router $router */

$router->get('/version', function () use ($router) {
    return $router->app->version();
});


$router->get('/{route:.*}/', function () {
    return view('app');
});
