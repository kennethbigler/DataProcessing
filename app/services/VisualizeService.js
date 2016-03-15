app.factory('VisualizeService', [function () {
    "use strict";
    var factory = {},
        data = {},
        i = 0,
        aSum = 0,
        bSum = 0;
    
    data = window.data.reported;
    // find the sums
    for (i = 0; i < data.length; i += 1) {
        aSum += data[i].a;
        bSum += data[i].b;
    }
    // divide value by sum for %
    for (i = 0; i < data.length; i += 1) {
        data[i].a /= aSum;
        data[i].b /= bSum;
    }
    // assign to return value
    factory.data = data;
    // expected value
    factory.expected = 1 / data.length;

    return factory;
}]);