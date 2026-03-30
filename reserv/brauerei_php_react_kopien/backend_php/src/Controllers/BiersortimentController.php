<?php
namespace App\Controllers;

use App\Models\BiersortimentModel;

class BiersortimentController {

    public function index() {
        $model = new BiersortimentModel();
        echo json_encode($model->getAll());
    }
}