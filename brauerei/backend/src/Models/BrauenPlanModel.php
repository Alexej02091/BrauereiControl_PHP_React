<?php
namespace App\Models;

use App\Core\Database;
use PDO;

class BrauenPlanModel {

    public function getAll(): array {
        $sql = "
            SELECT 
                bp.brau_id,
                bp.sorte,
                bp.tank_id,
                bp.menge,
                brauer.name AS brauer,
                helfer.name AS helfer,
                bp.datum
            FROM brauen_plan bp
            JOIN personal_info brauer ON bp.brauer_id = brauer.person_id
            JOIN personal_info helfer ON bp.helfer_id = helfer.person_id
        ";

        $stmt = Database::getConnection()->query($sql);
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}