 <?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

 $conn = mysqli_connect("localhost", "root", "", "cytaty_db");
 $output = array();
 $query = "SELECT id, cytat, osoba FROM cytaty_tabela ORDER BY id DESC";
 $result = mysqli_query($conn, $query);
 if(mysqli_num_rows($result) > 0) {
      while($row = mysqli_fetch_array($result)) {
           $output[] = $row;
      }
      echo json_encode($output);
 }
 ?>
