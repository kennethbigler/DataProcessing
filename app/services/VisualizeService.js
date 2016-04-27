/*global app, console*/
app.factory('VisualizeService', [function () {
    "use strict";
    var factory = {},
        data = [],
        nData = [],
        aData = [],
        bData = [],
        i = 0,
        aSum = 0,
        bSum = 0,
        max = 0,
        aMax = 0,
        bMax = 0;
    
    // variables
    factory.aGoal = 1200;
    factory.bGoal = 800;
    
    // get data from the window
    data = window.data;
    factory.data = data;
    
    // find max to fit results into the graph
    for (i = 0; i < data.length; i += 1) {
        aData[i] = {a: data[i].a, b: 0};
        bData[i] = {a: 0, b: data[i].b};
        if (data[i].a > aMax) {
            aMax = data[i].a;
        }
        if (data[i].b > bMax) {
            bMax = data[i].b;
        }
    }
    max = (aMax < bMax) ? bMax : aMax;
    if (factory.expected > max) {
        max = factory.expected;
    }
    if (factory.aGoal > aMax) {
        aMax = factory.aGoal + 5;
    }
    if (factory.bGoal > bMax) {
        bMax = factory.bGoal + 5;
    }
    factory.max = max;
    factory.aMax = aMax;
    factory.bMax = bMax;
    factory.aData = aData;
    factory.bData = bData;
    
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