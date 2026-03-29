<?php

namespace App\Core;

use App\Shared\Session;

class App
{
    public function run()
    {
        Session::start();

        $loader = new ModuleLoader();
        $loader->loadModules();

        $router = new Router();
        $router->dispatch();
    }
}