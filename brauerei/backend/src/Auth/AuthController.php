<?php

namespace App\Auth;

use App\Shared\Response;
use App\Shared\Session;

class AuthController
{
    private AuthService $service;

    public function __construct()
    {
        $this->service = new AuthService();
    }

    public function login()
    {
        $data = json_decode(file_get_contents('php://input'), true);

        $name = $data['name'] ?? '';
        $password = $data['password'] ?? '';

        $user = $this->service->verifyCredentials($name, $password);

        if (!$user) {
            return Response::json(['success' => false, 'message' => 'Invalid credentials'], 401);
        }

        // Session setzen
        Session::regenerate();
        Session::set('user_id', $user['id']);
        Session::set('role', $user['role']);

        return Response::json([
            'success' => true,
            'role' => $user['role'],
            'name' => $user['name']
        ]);
    }
}
