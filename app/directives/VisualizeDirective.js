/*global app*/
// ---------------------------------------------------------------------------
// Directive used to remove undefined errors in svg elements
// ---------------------------------------------------------------------------
app.directive('ngXa', function () {
    // line graph x1
    'use strict';
    return function (scope, element, attrs) {
        attrs.$observe('ngXa', function (value) {
            attrs.$set('x1', value);
        });
    };
}).directive('ngXb', function () {
    // line graph x2
    'use strict';
    return function (scope, element, attrs) {
        attrs.$observe('ngXb', function (value) {
            attrs.$set('x2', value);
        });
    };
}).directive('ngYa', function () {
    // line graph y1
    'use strict';
    return function (scope, element, attrs) {
        attrs.$observe('ngYa', function (value) {
            attrs.$set('y1', value);
        });
    };
}).directive('ngYb', function () {
    // line graph y2
    'use strict';
    return function (scope, element, attrs) {
        attrs.$observe('ngYb', function (value) {
            attrs.$set('y2', value);
        });
    };
}).directive('ngX', function () {
    // svg x
    'use strict';
    return function (scope, element, attrs) {
        attrs.$observe('ngX', function (value) {
            attrs.$set('x', value);
        });
    };
}).directive('ngY', function () {
    // svg y
    'use strict';
    return function (scope, element, attrs) {
        attrs.$observe('ngY', function (value) {
            attrs.$set('y', value);
        });
    };
}).directive('ngWidth', function () {
    // svg width
    'use strict';
    return function (scope, element, attrs) {
        attrs.$observe('ngWidth', function (value) {
            attrs.$set('width', value);
        });
    };
});