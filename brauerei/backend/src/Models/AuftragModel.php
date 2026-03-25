<?php
namespace App\Models;

use App\Core\Database;
use PDO;

class AuftragModel {
    public function create(string $sorte, int $tank, string $datum): bool {
        $sql = "
            INSERT INTO brauen_plan (sorte, tank_id, menge, brauer_id, helfer_id, datum)
            VALUES (?, ?, 7000, 3, 4, ?)
        ";

        $stmt = Database::getConnection()->prepare($sql);
        return $stmt->execute([$sorte, $tank, $datum]);
    }
}
