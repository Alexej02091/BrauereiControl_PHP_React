<?php

namespace App\Core;

use App\Shared\Session;

class ModuleLoader
{
    public function loadModules()
    {
        $role = Session::get('role') ?? 'guest';

        $moduleDir = __DIR__ . "/../" . ucfirst($role);

        if (is_dir($moduleDir)) {
            foreach (glob($moduleDir . "/*Routes.php") as $routeFile) {
                require_once $routeFile;
            }
        }
    }
}
