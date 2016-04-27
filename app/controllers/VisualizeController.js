/*global $, console, app, $scope, AWS*/

app.controller('VisualizeController', ['$scope', 'VisualizeService', function ($scope, $VS) {
    "use strict";
    // graph vars
    $scope.width = 600;
    $scope.height = 350;
    $scope.yAxis = 'Number';
    $scope.xAxis = 'Time';
    
    function init() {
        $scope.max = $VS.max;
        $scope.data = $VS.data;
        $scope.aExpected = $VS.aExpected;
        $scope.bExpected = $VS.bExpected;
    }
    init();
    
    $scope.swapData = function () {
        if ($scope.data !== $VS.nData) {
            $scope.max = $VS.nMax;
            $scope.data = $VS.nData;
            $scope.aExpected = $scope.bExpected = $scope.aGoal = $scope.bGoal = $VS.expected;
        } else {
            init();
        }
    };
    
    $scope.showA = function () {
        $scope.max = $VS.aMax;
        $scope.data = $VS.aData;
        $scope.aExpected = $VS.aExpected;
        $scope.bExpected = $VS.aGoal;
    };
    
    $scope.showB = function () {
        $scope.max = $VS.bMax;
        $scope.data = $VS.bData;
        $scope.bExpected = $VS.bExpected;
        $scope.aExpected = $VS.bGoal;
        console.log($scope.aExpected);
    };
}]);