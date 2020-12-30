var app = angular.module("JajuwaApp", []);
app.controller("JajuwaController", ($scope, $http) => {
  $scope.displayCytaty = function () {
    var config = {
      method: "GET",
      url: "/cytaty",
    };
    $http(config).then(
      (response) => {
        $scope.Cytaty = response.data;
      },
      () => {}
    );
  };

  $scope.displayLeaderboard = function () {
    var config = {
      method: "GET",
      url: "/api/cytaty/leaderboard",
    };
    $http(config).then(
      (response) => {
        $scope.Cytaty_leaderboard = response.data;
      },
      () => {}
    );
  };

  $scope.displayCount = function () {
    var config = {
      method: "GET",
      url: "/api/cytaty/count",
    };
    $http(config).then(
      (response) => {
        $scope.Cytaty_count = response.data.count;
      },
      () => {}
    );
  };

  $scope.displayData = function () {
    $scope.displayCytaty();
    $scope.displayLeaderboard();
    $scope.displayCount();
  };

  setInterval(function () {
    $scope.displayData();
    console.log("Getting new data...");
  }, 10000);

  function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

  $scope.addRow = () => {
    if ($scope.cytat != undefined && $scope.osoba != undefined) {
      var data = [];
      data.cytat = $scope.cytat;
      data.osoba = $scope.osoba;

      $scope.Cytaty.unshift(data);

      var config = {
        method: "GET",
        url: "/api/cytaty/" + $scope.osoba + '/' + $scope.cytat
      };
      $http(config).then(
        () => {
          $scope.cytat = null;
          $scope.osoba = null;

          //alert
          document.getElementById("informacjabox").innerHTML =
            '</br><div class="alert alert-success" role="alert">Cytat dodany do bazy danych.</div>';

          sleep(8000).then(() => {
            document.getElementById("informacjabox").innerHTML = "";
          });
        },
        () => {}
      );
    }
  };
});
