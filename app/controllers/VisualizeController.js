/*global $, console, app, $scope, AWS*/

app.controller('VisualizeController', ['$scope', 'VisualizeService', function ($scope, $VS) {
    "use strict";
    // graph vars
    $scope.width = 600;
    $scope.height = 350;
    $scope.yAxis = 'Number';
    $scope.xAxis = 'Time';
    
    function init() {
        $scope.data = $VS.data;
        $scope.max = $VS.max;
        $scope.aExpected = $VS.aExpected;
        $scope.bExpected = $VS.bExpected;
    }
    init();
    
    $scope.swapData = function () {
        if ($scope.data === $VS.data) {
            $scope.max = $VS.nMax;
            $scope.data = $VS.nData;
            $scope.aExpected = $scope.bExpected = $VS.expected;
        } else {
            init();
        }
    };
}]);