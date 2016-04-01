/*global $, console, app, $scope, AWS*/

app.controller('VisualizeController', ['$scope', 'VisualizeService', function ($scope, $VS) {
    "use strict";
    // graph vars
    $scope.data = $VS.data;
    $scope.expected = $VS.expected;
    $scope.max = $VS.max;
    $scope.width = 600;
    $scope.height = 350;
    $scope.yAxis = 'Number';
    $scope.xAxis = 'Time';
}]);