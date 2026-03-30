<?php

namespace App\Auth;

use App\Shared\Database;

class AuthRepository
{
    public function findByName(string $name): ?array
    {
        $db = Database::getConnection();

        $stmt = $db->prepare("SELECT * FROM users WHERE name = :name LIMIT 1");
        $stmt->execute(['name' => $name]);

        $user = $stmt->fetch();

        return $user ?: null;
    }
}
