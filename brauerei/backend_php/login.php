<?php
// Daten erhalten und in Variablen eingespeichert
$name = $_POST['name'] ?? '';
$password = $_POST['password'] ?? '';

//Datenbank verbindung
include_once('db_zugriff.php');
$db = new dbzugriff();
$db->connect();

//Name und Password checken
$sql = "SELECT * FROM users WHERE name = $name and password = $password";

$name .= " bearbeitet";
$password .= " bearbeitet";

header("Location: ../index.php?name=$name&pass=$password");
exit;