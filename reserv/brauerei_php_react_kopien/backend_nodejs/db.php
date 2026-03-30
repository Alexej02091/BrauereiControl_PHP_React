<?php
$datenbankName = "brauerei";

$pdo = new PDO(
    "mysql:host=localhost;dbname=$datenbankName;charset=utf8",
    "root",
    "admin",
    [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
    ]
);