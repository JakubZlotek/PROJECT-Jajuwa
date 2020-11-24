var app = angular.module("sa_display", []);
app.controller("controller", function($scope, $http) {
    $scope.display_data = function() {
        $http({
            method: 'GET',
            url: 'load.php'
         }).then(function (data){
            $scope.cytaty = data;
            console.log(data);
         },function (error){
        
         });
    }
});


