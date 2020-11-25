 var app = angular.module('JajuwaApp', []);
 app.controller('JajuwaController', function ($scope, $http) {

     $scope.displayData = function () {
         var config = {
             method: 'GET',
             url: 'server/load.php'
         };
         $http(config).then(function (response) {
             $scope.Cytaty = response.data;
         }, function () {});
     };

     function sleep(time) {
         return new Promise((resolve) => setTimeout(resolve, time));
     }

     $scope.addRow = function () {
         if ($scope.cytat != undefined && $scope.osoba != undefined) {
             var data = [];
             data.cytat = $scope.cytat;
             data.osoba = $scope.osoba;

             $scope.Cytaty.unshift(data);

             // Clear textbox



             var config = {
                 method: 'POST',
                 url: 'server/insert.php',
                 data: {
                     cytat: $scope.cytat,
                     osoba: $scope.osoba
                 }
             };
             $http(config).then(function () {

                 //clear 

                 console.log($scope.cytat, $scope.osoba);

                 $scope.cytat = null;
                 $scope.osoba = null;

                 //alert
                 document.getElementById("informacjabox").innerHTML = '</br><div class="alert alert-success" role="alert">Cytat dodany do bazy danych. Pojawi się on dla wszystkich po akceptacji przez administratora.</div>';

                 sleep(5000).then(() => {
                     document.getElementById("informacjabox").innerHTML = '';
                 });
             }, function () {});




         }
     };



 });