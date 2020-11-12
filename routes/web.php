<?php

use Laravel\Lumen\Routing\Router;


/** @var Router $router */

$router->get('/{route:.*}/', function () {
    return view('app');
});
