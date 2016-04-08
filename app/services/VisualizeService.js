/*global app, console*/
app.factory('VisualizeService', [function () {
    "use strict";
    var factory = {},
        data = [],
        nData = [],
        i = 0,
        aSum = 0,
        bSum = 0,
        max = 0;
    
    // get data from the window
    data = window.data;
    factory.data = data;
    
    // find max to fit results into the graph
    for (i = 0; i < data.length; i += 1) {
        if (data[i].a > max) {
            max = data[i].a;
        }
        if (data[i].b > max) {
            max = data[i].b;
        }
        if (factory.expected > max) {
            max = factory.expected;
        }
    }
    factory.max = max;
    
    // find the sums
    for (i = 0; i < data.length; i += 1) {
        aSum += data[i].a;
        bSum += data[i].b;
    }
    
    // expected value
    factory.aExpected = aSum / data.length;
    factory.bExpected = bSum / data.length;
    
    // Normalize Data
    // divide value by sum for %
    for (i = 0; i < data.length; i += 1) {
        nData.push({a: (data[i].a / aSum), b: (data[i].b / bSum)});
    }
    // assign to return value
    factory.nData = nData;
    
    // find max to fit results into the graph
    max = 0;
    for (i = 0; i < nData.length; i += 1) {
        if (nData[i].a > max) {
            max = nData[i].a;
        }
        if (nData[i].b > max) {
            max = nData[i].b;
        }
        if (factory.expected > max) {
            max = factory.expected;
        }
    }
    // assign to return value
    factory.nMax = max;
    
    // expected value
    factory.expected = 1 / data.length;

    return factory;
}]);