/*global $, console, app, $scope, AWS*/

app.controller('VisualizeController', ['$scope', 'VisualizeService', function ($scope, $VS) {
    "use strict";

    // declare variables
    var i, asum, bsum;
    
    // graph vars
    $scope.data = $VS.data;
    $scope.expected = $VS.expected;
    $scope.width = 600;
    $scope.height = 350;
    $scope.yAxis = 'Number';
    $scope.xAxis = 'Time';
    $scope.max = 0;
    
    // find max to fit results into the graph
    for (i = 0; i < $scope.data.length; i += 1) {
        if ($scope.data[i].a > $scope.max) {
            $scope.max = $scope.data[i].a;
        }
        if ($scope.data[i].b > $scope.max) {
            $scope.max = $scope.data[i].b;
        }
        if ($scope.expected > $scope.max) {
            $scope.max = $scope.expected;
        }
    }
    //console.log($scope.data);
}]);