<?php
namespace App\Controllers;

use App\Models\BierlagerModel;

class BierlagerController {

    public function index() {
        $model = new BierlagerModel();
        echo json_encode($model->getAll());
    }

    public function leer() {
        $model = new BierlagerModel();
        echo json_encode($model->getEmptyTanks());
    }
}
