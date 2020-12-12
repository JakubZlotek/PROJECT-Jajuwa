 <?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

 $conn = mysqli_connect("localhost", "root", "", "cytaty_db");
 $jso = array();
 $output = array();
 $query = "SELECT id, cytat, osoba FROM cytaty_tabela ORDER BY id DESC";
 $result = mysqli_query($conn, $query);
 if(mysqli_num_rows($result) > 0) {
      while($row = mysqli_fetch_array($result)) {
           $output[] = $row;
      }
  
 }

 
$query2 = "SELECT id FROM cytaty_tabela";
$result2 = mysqli_query($conn, $query2);





$query3 = "SELECT osoba, count(*) as number FROM cytaty_tabela GROUP BY osoba ORDER BY count(*) DESC;";
$result3 = mysqli_query($conn, $query3);
if(mysqli_num_rows($result3) > 0) {
     while($row3 = mysqli_fetch_array($result3)) {
          $output3[] = $row3;
     }
 
}

$jso["cytaty"] = $output;
$jso["count"] = mysqli_num_rows($result2);
$jso["leaderboard"] = $output3;


 echo json_encode($jso);

 ?>
