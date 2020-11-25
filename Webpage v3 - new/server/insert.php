 <?php

if ($_SERVER['REQUEST_METHOD'] == 'POST' && empty($_POST))
    $_POST = json_decode(file_get_contents('php://input'), true);

$cytat = $_POST["cytat"];
$osoba = $_POST["osoba"];

 $con = mysqli_connect("localhost", "root", "", "cytaty_db");
 $output = array();
 $sql="INSERT INTO cytaty_tabela (cytat, osoba) VALUES ('$cytat','$osoba')";
 mysqli_query($con,$sql);
 mysqli_close($con);


  require_once "discord/DiscordWebhook.php";
  require_once "discord/DiscordEmbed.php";

  $webhook = [
    "url" => "https://discordapp.com/api/webhooks/681612823348248639/a8Vj7bXm3w1WUAMEATNF_GH_8aBEyCWAf0WEMFlT-bwiifQ6oLF3f3t8P5qYjRXEFQMy",
    "username" => "",
    "avatar" => ""
  ];


  $message    = "Nowy cytat na jajuwie: " .  $_POST["cytat"] . " Osoba: " .  $_POST["osoba"];
  $msg = new DiscordWebhook($webhook["url"]);

  $msg->setMessage($message)->setUsername("ToWcaleNieBabelan w skrócie TWNB")->setAvatar("")->setTts("")->send();



 ?>