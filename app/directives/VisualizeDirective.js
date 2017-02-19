/*global app*/
// ---------------------------------------------------------------------------
// Directive used to remove undefined errors in svg elements
// ---------------------------------------------------------------------------
app.directive('ngXa', function () {
    'use strict';
    return function (scope, element, attrs) {
        attrs.$observe('ngXa', function (value) {
            attrs.$set('x1', value);
        });
    };
}).directive('ngXb', function () {
    'use strict';
    return function (scope, element, attrs) {
        attrs.$observe('ngXb', function (value) {
            attrs.$set('x2', value);
        });
    };
}).directive('ngYa', function () {
    'use strict';
    return function (scope, element, attrs) {
        attrs.$observe('ngYa', function (value) {
            attrs.$set('y1', value);
        });
    };
}).directive('ngYb', function () {
    'use strict';
    return function (scope, element, attrs) {
        attrs.$observe('ngYb', function (value) {
            attrs.$set('y2', value);
        });
    };
}).directive('ngX', function () {
    'use strict';
    return function (scope, element, attrs) {
        attrs.$observe('ngX', function (value) {
            attrs.$set('x', value);
        });
    };
}).directive('ngY', function () {
    'use strict';
    return function (scope, element, attrs) {
        attrs.$observe('ngY', function (value) {
            attrs.$set('y', value);
        });
    };
}).directive('ngWidth', function () {
    'use strict';
    return function (scope, element, attrs) {
        attrs.$observe('ngWidth', function (value) {
            attrs.$set('width', value);
        });
    };
});