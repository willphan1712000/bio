<?php

namespace business\auth;

use config\SystemConfig;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;
use Dotenv\Dotenv;

Dotenv::createImmutable(__DIR__ . "./../../../../")->load();

/**
 * JWT-based Authorization
 */
class JWTAuth implements AuthInterface
{
    protected string $username;
    protected ?string $token;

    public function __construct(string $username, ?string $token = null)
    {
        $this->username = $username;
        $this->token = $token;
    }

    public function auth(): bool
    {
        if ($this->token === null) return false;

        try {
            $decode = JWT::decode($this->token, new Key($_ENV['JWT_SECRET'], 'HS256'));
            if ($decode->username === $this->username) {
                return true;
            }
        } catch (\Exception $e) {
            // Invalid signature
            return false;
        }
        return false;
    }

    public function generateAuth(): bool|string
    {
        $token = JWT::encode([
            "username" => $this->username,
            "iat" => time(),
            "exp" => time() + SystemConfig::globalVariables()['timeSession']
        ], $_ENV['JWT_SECRET'], 'HS256');

        return $token;
    }
}
