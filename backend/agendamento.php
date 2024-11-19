<?php

$nome = $_POST['nome'];
$email = $_POST['email'];
$veiculo = $_POST['veiculo'];
$servico = $_POST['servico'];
$data = $_POST['data'];
$hora = $_POST['hora'];


echo "Agendamento realizado com sucesso!<br>";
echo "Nome: " . $nome . "<br>";
echo "E-mail: " . $email . "<br>";
echo "Veículo: " . $veiculo . "<br>";
echo "Serviço: " . $servico . "<br>";
echo "Data: " . $data . "<br>";
echo "Hora: " . $hora . "<br>";
?>
