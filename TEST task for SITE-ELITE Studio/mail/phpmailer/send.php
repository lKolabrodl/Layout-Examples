<?php

require 'PHPMailer.php';
require 'SMTP.php';

$name = $_POST['text'];
$number = $_POST['tel'];
$email = $_POST['email'];

$mail = new PHPMailer;
$mail->isSMTP();
$mail->Host = 'smtp.mail.ru';
$mail->SMTPAuth = true;
$mail->Username = 'Test'; // Ваш логин в Яндексе. 
$mail->Password = '123'; // Ваш пароль
$mail->SMTPSecure = 'ssl';
$mail->Port = 465;
$mail->setFrom('test@mail.ru'); // Ваш Email
$mail->addAddress('test@mail.ru'); // Email получателя

// Письмо
$mail->isHTML(true);
$mail->Subject = "Заголовок"; // Заголовок письма
$mail->Body = "Сообщение: $name . Телефон $number . Почта $email";
if (!$mail->send()) {
  echo 'Message could not be sent.';
  echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
  echo 'ok';
}
