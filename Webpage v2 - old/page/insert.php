<html>
<head>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <script src='https://www.google.com/recaptcha/api.js'></script>
</head>
<body>

<?php



$con = mysqli_connect('localhost','user','password','database');

if (!$con)

  {

  die('Could not connect: ' . mysql_error());

  }

 $ipaddress = $_SERVER['REMOTE_ADDR'];

$sql="INSERT INTO cytaty_tabela (cytat, osoba, ip) VALUES ('$_POST[cytat]','$_POST[osoba]', '$ipaddress')";

mysqli_query($con,$sql);

  // load Webhook
  require_once "DiscordWebhook.php";
  require_once "DiscordEmbed.php";

  $webhook = [
    "url" => "discord webhook link here",
    "username" => "",
    "avatar" => ""
  ];
  $message    = "Ktos cos dodal na jajuwe";
  $msg = new DiscordWebhook($webhook["url"]);

  $msg->setMessage($message)->setUsername("test")->setAvatar("")->setTts("")->send();


mysqli_close($con);

echo "<script> location.href='index.php'; </script>";
        exit;

?>

</body>

</html>
