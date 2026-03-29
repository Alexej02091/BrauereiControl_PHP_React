<?php
// router_brauenplan.php

return function($pdo) {

    // Beispiel: Nutzung in index.php
    // $app->get('/brauenplan', require 'router_brauenplan.php')($pdo);

    return function() use ($pdo) {

        header('Content-Type: application/json; charset=utf-8');

        try {
            $stmt = $pdo->query("
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
            ");

            $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($results);

        } catch (PDOException $e) {
            http_response_code(500);
            echo json_encode(["error" => $e->getMessage()]);
        }
    };
};
