<?php
require_once __DIR__ . "/../../db.php";

$input = json_decode(file_get_contents("php://input"), true);

$sorte = $input["sorte"];
$menge = $input["menge"];

$stmt = $pdo->prepare("INSERT INTO auftraege (sorte, menge) VALUES (?, ?)");
$stmt->execute([$sorte, $menge]);

echo json_encode(["status" => "OK"]);