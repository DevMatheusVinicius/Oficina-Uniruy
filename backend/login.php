<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    $email = $_POST['email'];
    $password = $_POST['password'];

    
    $usuarios = [
        'usuario@example.com' => 'senha123', 
    ];

    if (array_key_exists($email, $usuarios) && $usuarios[$email] === $password) {
        
        header('Location: dashboard.php');
        exit;  
    } else {
        
        header('Location: ../login.html?error=true');
        exit;  
    }
}
?>
