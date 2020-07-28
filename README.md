

# Requirements EN

  - (OPTIONAL) Discord server (to notify about new quotation)
  - MariaDB or MySQL Database


# Configuration EN:

  - <b>Inside: index.php</b>
  ```php
    $conn = mysqli_connect('localhost','user','password','database');
  ````
  fill it with connection credentials for your database

  - <b>Inside insert.php:</b>
  ```php
   $con = mysqli_connect('localhost','user','password','database');
  ````
  same as in <b>index.php</b> just fill it with you connection credentials

  ```php
   "url" => "discord webhook link here",
  ````
  fill it with your discord webhook link

  - <b>Run in your database querry:</b>

  ```sql
  CREATE TABLE `cytaty_tabela` (
    `id` int(50) NOT NULL,
    `cytat` varchar(80) NOT NULL,
    `osoba` varchar(50) NOT NULL,
    `date_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `ip` varchar(50) NOT NULL,
    `zatwierdzony` enum('0','1') NOT NULL
  )
  ````

# Deleting discord module EN

    - <b>delete from: insert.php</b>

    ```php
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
    ````
    - <b>Delete file: DiscordEmbed.php</b>
    - <b>Delete file: Discord Webhook.php</b>

Enjoy that's all :D

# Wymagania PL

        - (OPCJONALNIE) Serwer Discord (do informowania o nowych cytatach)
        - Baza danych MariaDB lub MySQL


# Konfiguracja PL:

    - <b>w pliku: index.php</b>
    ```php
      $conn = mysqli_connect('localhost','user','password','database');
    ````
    wypełnij danymi do twojej bazy danych

    - <b>Inside insert.php:</b>
    ```php
     $con = mysqli_connect('localhost','user','password','database');
    ````
    Tak samo jak w pliku <b>index.php</b> poprostu wypełnij danymi do twojej bazy danych

    ```php
     "url" => "discord webhook link here",
    ````
    w miejscu <b>discord webhook link here</b> wstaw link webhooka twojego serwera discord

    - <b>Wykonaj w swojej bazie danych:</b>

    ```sql
    CREATE TABLE `cytaty_tabela` (
      `id` int(50) NOT NULL,
      `cytat` varchar(80) NOT NULL,
      `osoba` varchar(50) NOT NULL,
      `date_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
      `ip` varchar(50) NOT NULL,
      `zatwierdzony` enum('0','1') NOT NULL
    )
    ````





# Usuwanie modułu discorda PL

    - <b>delete from: insert.php</b>

    ```php
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
    ````
    - <b>Delete file: DiscordEmbed.php</b>
    - <b>Delete file: Discord Webhook.php</b>

To wszystko miłego użytkowania :D
