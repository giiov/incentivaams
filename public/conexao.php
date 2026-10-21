<?php
try {
    $config = require __DIR__ . '/private-config/db.php';

    $verify = new PDO(
        'mysql:host=' . $config['host'] .
        ';dbname=' . $config['database'] .
        ';charset=utf8mb4',
        $config['username'],
        $config['password'],
        [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
        ]
    );

    $verify->exec("SET time_zone = '-03:00'");
} catch (Throwable $erro) {
    error_log('Erro de conexão: ' . $erro->getMessage());
    http_response_code(500);
    exit('Não foi possível conectar ao banco de dados.');
}