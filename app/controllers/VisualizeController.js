/*global app, $scope*/

app.controller('VisualizeController', ['$scope', 'VisualizeService', '$window', function ($scope, $VS, $window) {
    "use strict";
    // graph vars
    $scope.width = $window.innerWidth - 60;
    $scope.height = $scope.width / 2.5;
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
    };
    
    $scope.showGrades = function () {
        $scope.max = $VS.gMax;
        $scope.data = $VS.grades;
        $scope.aExpected = $VS.gpa;
        $scope.bExpected = 0;
    };
}]);