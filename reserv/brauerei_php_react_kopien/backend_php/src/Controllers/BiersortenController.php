<?php
namespace App\Controllers;

use App\Models\BiersortenModel;

class BiersortenController {

    public function index() {
        $model = new BiersortenModel();
        echo json_encode($model->getAll());
    }
}