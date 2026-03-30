<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST");

require_once "db.php";

// ---- Routing ----
$path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

// Root
if ($path === "/") {
    echo "My first PHP application";
    exit;
}

/*  
|--------------------------------------------------------------------------
| GAST – GET
|--------------------------------------------------------------------------
| Node.js: app.use('/', apiBiersortiment(con));
| React ruft: /biersortiment
| PHP: /api/biersortiment UND /biersortiment
*/

if ($path === "/api/biersortiment" || $path === "/biersortiment") {
    require "api/gast/biersortiment.php";
    exit;
}

/*  
|--------------------------------------------------------------------------
| PRODUKTION – GET
|--------------------------------------------------------------------------
| Node.js: app.use('/', apiBierlager(con));
| React ruft: /bierlager
*/

if ($path === "/api/bierlager" || $path === "/bierlager") {
    require "api/produktion/bierlager.php";
    exit;
}

if ($path === "/api/leer_hauptgaertank" || $path === "/leerhauptgaertank") {
    require "api/produktion/leer_hauptgaertank.php";
    exit;
}

if ($path === "/api/biersorten" || $path === "/biersorten") {
    require "api/produktion/biersorten.php";
    exit;
}

if ($path === "/api/aktuelle_auftraege" || $path === "/brauenplan") {
    require "api/produktion/aktuelle_auftraege.php";
    exit;
}

/*  
|--------------------------------------------------------------------------
| PRODUKTION – POST
|--------------------------------------------------------------------------
| Node.js: app.use('/', apiAuftragGeben(con));
| React ruft: POST /auftrag_geben
*/

if (
    ($path === "/api/auftrag_geben" || $path === "/auftrag_geben") &&
    $_SERVER["REQUEST_METHOD"] === "POST"
) {
    require "api/produktion/auftrag_geben.php";
    exit;
}

// Fallback
http_response_code(404);
echo json_encode(["error" => "Route not found"]);
