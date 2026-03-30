<?php

namespace App\Auth;

class AuthService
{
    private AuthRepository $repo;

    public function __construct()
    {
        $this->repo = new AuthRepository();
    }

    public function verifyCredentials(string $name, string $password): ?array
    {
        $user = $this->repo->findByName($name);

        if (!$user) {
            return null;
        }

        if (!password_verify($password, $user['password'])) {
            return null;
        }

        return $user;
    }
}
