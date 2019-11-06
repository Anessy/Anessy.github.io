<?php 
echo "Hello world!";

$name = $_POST['user_name']; 
$mymail = $_POST['user_mail']; 
$phone = $_POST['user_phone'];
$web = $_POST['user_web'];
$message = $_POST['user_message'];

echo "Привет, " . $name . "! Твои данные: " . $mail . $phone . $web . $message ;
?> 