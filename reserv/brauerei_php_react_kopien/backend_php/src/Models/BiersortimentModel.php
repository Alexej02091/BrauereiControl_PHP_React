<?php
namespace App\Models;

use App\Core\Database;
use PDO;

class BiersortimentModel {

    public function getAll(): array {
        $sql = "
            SELECT
                p.produkt_id,
                b.image AS biersorte_image,
                b.bezeichnung AS biersorte,
                l.bezeichnung AS pfand,
                l.image AS pfand_image,
                l.volumen_liter AS volumen,
                pr.preis_pro_liter AS preis
            FROM produktsortiment p
            JOIN biersorten b ON p.biersorte_id = b.biersorte_id
            JOIN lieferform l ON p.lieferform_id = l.lieferform_id
            JOIN preisen pr ON p.preis_id = pr.preis_id
        ";

        $stmt = Database::getConnection()->query($sql);
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}