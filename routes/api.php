<?php

use Laravel\Lumen\Routing\Router;

/**
 * All these routes are prefixed by `env('API_PREFIX')`. By default 'api'
 * To change that you need to unset/disable API_PREFIX in your .env file
 */

/** @var Router $router */

$router->get('/version', function () use ($router) {
    return $router->app->version();
});

