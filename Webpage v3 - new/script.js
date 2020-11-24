 var app = angular.module('JajuwaApp', []);
 app.controller('JajuwaController', function ($scope, $http) {


     var config = {
         method: 'GET',
         url: 'load.php'
     };
     $http(config).then(function (response) {
         $scope.Cytaty = response.data;
         console.log(response.data);
     }, function () {});


 });