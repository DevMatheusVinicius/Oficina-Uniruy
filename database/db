<?php
// Defina as credenciais de conexão diretamente (para desenvolvimento local)
$host = getenv('DB_HOST') ?: '127.0.0.1'; // Endereço do banco de dados, usa a variável de ambiente se definida, senão o padrão localhost
$port = getenv('DB_PORT') ?: '3306'; // Porta do MySQL, padrão 3306
$db = getenv('DB_NAME') ?: 'oficina_mecanica'; // Nome do banco de dados
$user = getenv('DB_USER') ?: 'root'; // Usuário do banco de dados
$pass = getenv('DB_PASS') ?: 'Taiane'; // Senha do banco de dados, valor padrão para o desenvolvimento local
$charset = 'utf8mb4'; // Codificação padrão do banco de dados

// String DSN para a conexão com o banco de dados MySQL
$dsn = "mysql:host=$host;port=$port;dbname=$db;charset=$charset";

// Configurações do PDO
$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION, // Para lançar exceções em caso de erro
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC, // Para que os resultados venham como arrays associativos
    PDO::ATTR_EMULATE_PREPARES   => false, // Desabilitar a emulação de prepared statements
];

try {
    // Tenta estabelecer a conexão com o banco de dados
    $pdo = new PDO($dsn, $user, $pass, $options);
    // Se a conexão for bem-sucedida, nada será impresso
} catch (\PDOException $e) {
    // Caso aconteça algum erro na conexão
    die('Erro na conexão com o banco de dados: ' . $e->getMessage());
}
?>
