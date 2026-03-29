<?php

use App\Core\Router;
use App\Auth\AuthController;

$router = Router::getInstance();

$router->post('/auth/login', [AuthController::class, 'login']);
