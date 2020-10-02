<html>
<head>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <script src='https://www.google.com/recaptcha/api.js'></script>
</head>
<body>

<?php




$con = mysqli_connect('localhost','31912320_cytaty','p@ssword11','31912320_cytaty');

if (!$con)

  {

  die('Could not connect: ' . mysql_error());

  }

 $ipaddress = $_SERVER['REMOTE_ADDR'];


if ($_POST['kod'] == "PIES") {

    $sql="INSERT INTO cytaty_tabela (cytat, osoba, ip, zatwierdzony) VALUES ('$_POST[cytat]','$_POST[osoba]', '$ipaddress','1')";

 } else {

    $sql="INSERT INTO cytaty_tabela (cytat, osoba, ip) VALUES ('$_POST[cytat]','$_POST[osoba]', '$ipaddress')";
    
 }


mysqli_query($con,$sql);

  // load Webhook
  require_once "DiscordWebhook.php";
  require_once "DiscordEmbed.php";

  $webhook = [
    "url" => "https://discordapp.com/api/webhooks/681612823348248639/a8Vj7bXm3w1WUAMEATNF_GH_8aBEyCWAf0WEMFlT-bwiifQ6oLF3f3t8P5qYjRXEFQMy",
    "username" => "JAJOBOT",
    "avatar" => ""
  ];
  $message    = "JAJUWA: Nowy cytat";
  $msg = new DiscordWebhook($webhook["url"]);

  $msg->setMessage($message)->setUsername("test")->setAvatar("")->setTts("")->send();


mysqli_close($con);

echo "<script> location.href='index.php'; </script>";
        exit;

?>

</body>

</html>
