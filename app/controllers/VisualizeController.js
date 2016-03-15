/*global $, console, app, $scope, AWS*/

app.controller('VisualizeController', ['$scope', function ($scope) {
    "use strict";

    // declare variables
    var i;
    
    // graph vars
    $scope.data = window.data.reported;
    $scope.width = 600;
    $scope.height = 350;
    $scope.yAxis = 'Number';
    $scope.xAxis = 'Time';
    $scope.amax = 0;
    $scope.bmax = 0;
    
    // find max to normalize results
    for (i = 0; i < $scope.data.length; i += 1) {
        if ($scope.data[i].a > $scope.amax) {
            $scope.amax = $scope.data[i].a;
        }
        if ($scope.data[i].b > $scope.bmax) {
            $scope.bmax = $scope.data[i].b;
        }
    }
    //console.log($scope.data);
}]);