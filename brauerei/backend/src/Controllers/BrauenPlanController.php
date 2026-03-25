<?php
namespace App\Controllers;

use App\Models\BrauenPlanModel;

class BrauenPlanController {

    public function index() {
        $model = new BrauenPlanModel();
        echo json_encode($model->getAll());
    }
}