<?php

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

require_once "../vendor/autoload.php";

use App\Core\Router;
use App\Controllers\{
    BierlagerController,
    BiersortenController,
    BrauenPlanController,
    AuftragController,
    BiersortimentController
};

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");

$router = new Router();

// GET
$router->get('/bierlager', [new BierlagerController(), 'index']);
$router->get('/biersorten', [new BiersortenController(), 'index']);
$router->get('/brauenplan', [new BrauenPlanController(), 'index']);
$router->get('/biersortiment', [new BiersortimentController(), 'index']);
$router->get('/leerhauptgaertank', [new BierlagerController(), 'leer']);

// POST
$router->post('/auftraggeben', [new AuftragController(), 'create']);

$router->dispatch();
