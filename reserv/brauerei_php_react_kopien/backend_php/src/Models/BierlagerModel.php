<?php
namespace App\Models;

use App\Core\Database;
use PDO;

class BierlagerModel {
    public function getAll(): array {
        $sql = "
            SELECT bl.tanknummer, s.bezeichnung AS biersorte,
                   bl.braudatum, bl.aktuellemenge,
                   bl.temperatur, bl.zustand, bl.stammwürze
            FROM bierlager bl
            JOIN biersorten s ON bl.biersorte_id = s.biersorte_id
            WHERE tanknummer != 1 AND tanknummer != 2
        ";

        $stmt = Database::getConnection()->query($sql);
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function getEmptyTanks(): array {
        $sql = "
            SELECT *
            FROM bierlager
            WHERE aktuellemenge IS NULL
            AND tanknummer >= 3 AND tanknummer <= 10
        ";

        $stmt = Database::getConnection()->query($sql);
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}
