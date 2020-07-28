<html>

<head>
  <meta charset="utf-8">
  <title>Jajuwa 2.0</title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
  <script src="https://use.fontawesome.com/releases/v5.0.8/js/all.js"></script>
  <script src="https://www.google.com/recaptcha/api.js" async defer></script>
  <link rel="stylesheet" href="master.css">

</head>


<body>


  <div class="jumbotron text-center" id="gora" style="margin-bottom:0">

    <time id="time"></time>
    <h1>
      <span id="greeting">Cześć, </span>
      <span id="name" contenteditable="true"></span>
    </h1>
  </div>


  <script src="main.js"></script>


  <div id="particles-js"></div>
  <script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
  <script>
    particlesJS.load('particles-js', 'particles.json',
      function() {
        console.log('Po co tu wchodzisz?')
      })
  </script>


  <nav class="navbar navbar-expand-md navbar-dark text-light">
    <div class="container-fluid">

      <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarResponsive">
        <span class="navbar-toggler-icon"></span>
        <!-- zrobcie mi kawe pls -->
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">


          <li class="nav-item active">
            <p>
              <a class="nav-link" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">Dodaj Cytat</a>
            </p>
            <div class="collapse" id="collapseExample">
              <div class="card card-body ">
                <form action="insert.php" method="post">
                  <div class="form-group">
                    <label for="exampleInputEmail1" style="color: #000;">Cytat</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="np. Słonie latają" name="cytat">
                    <small id="emailHelp" class="form-text text-muted">Dodawanie treści innych niż cytaty może zakończyć się banem.</small>
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1" style="color: #000;">Inicjały</label>
                    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="np. MG" name="osoba">
                  </div>



                  <button type="submit" class="btn btn-primary">Dodaj</button>
                  <small class="form-text text-muted">Cytat pojawi się na stronie po zaakceptowaniu przez administratora.</small>
                </form>
              </div>
            </div>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="https://serwer1980543.home.pl/sql/" target="_blank">PHP MyAdmin</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>


  </div>

  <div class="container">

  </div>


  <div class="container" style="margin-top:30px">
    <div class="row">
      <div class="col-sm-4">
        <h3>Linki</h3>
        <ul class="nav nav-pills flex-column">
          <li class="nav-item">
            <a class="nav-link" href="https://www.facebook.com/zlotekispolka/" target="_blank">Facebook</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">GitHub SourceCode (Niedługo)</a>
          </li>
        </ul>
        <hr class="d-sm-none">

        <h2>Uwaga!</h2>
        <p>Strona nie ma na celu nikogo wyśmiewać ani oczerniać, wszystko robione jest w celach humorystycznych 😉.
          Administracja nie odpowiada za treści umieszczone przez użytkowników</p>

      </div>

      <div class="col-sm-8">





        <table class="table">
          <thead>
            <tr>

              <th scope="col">Cytat</th>
              <th scope="col">Inicjały</th>
            </tr>
          </thead>
          <tbody>
            <?php
        $conn = mysqli_connect('localhost','user','password','database');

        // Check connection
        if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
        }
        $sql = "SELECT cytat, osoba FROM cytaty_tabela  WHERE zatwierdzony = '1' ORDER BY `id` ASC";
        $result = $conn->query($sql);
        if ($result->num_rows > 0) {
        // output data of each row
        while($row = $result->fetch_assoc()) {
        echo "</tr><td>" . $row["cytat"] . "</td><td>". $row["osoba"]. "</td></tr>";
        }
        } else { echo "0 results"; }
        $conn->close();
        ?>
          </tbody>
        </table>








      </div>

    </div>
  </div>



</body>

</html>
