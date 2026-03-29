<?php
namespace App\Controllers;

use App\Models\AuftragModel;

class AuftragController {
    public function create() {
        $data = json_decode(file_get_contents("php://input"), true);

        $model = new AuftragModel();
        $success = $model->create(
            $data["sorte"],
            $data["tank"],
            $data["datum"]
        );

        echo json_encode(["success" => $success]);
    }
}
