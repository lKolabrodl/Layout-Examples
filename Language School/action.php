<?php



if ( !$_POST['g-recaptcha-response'] )
exit('Заполните капчу');

$url = 'https://www.google.com/recaptcha/api/siteverify';
$key = '6LetGrkUAAAAACgDVp9fhrTqaroqFB_CaWwlCrsz';
$query = $url.'?secret='.$key.'&response='.$_POST['g-recaptcha-response'].'&remoteip='.$_SERVER['REMOTE_ADDR'];

$data = json_decode(file_get_contents($query));

if ( $data->success == false) {
  exit('Капча введена неверно');
} else {
  $name = $_POST['name'];
  $tell = $_POST['phone'];

  $name = htmlspecialchars(stripslashes($name));
  $tell = htmlspecialchars(stripslashes($tell));

  $message =  "Name: " .$name. "\r\n Email: " .$tell;
  $to = 'apolon.99@mail.ru';
  $subject = 'Форма';

  if (mail($to, $subject, $message)) {
    exit("thank");
  }
}







