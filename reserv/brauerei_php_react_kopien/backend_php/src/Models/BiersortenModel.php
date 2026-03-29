<?php
namespace App\Models;

use App\Core\Database;
use PDO;

class BiersortenModel {

    public function getAll(): array {
        $sql = "SELECT * FROM biersorten";
        $stmt = Database::getConnection()->query($sql);
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}