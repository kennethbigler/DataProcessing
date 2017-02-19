// DO NOT USE 'use strict';
var includeJS = [
    'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.5/angular.js',
    'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.5/angular-route.js',
    'https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.3/jquery.min.js',
    'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js',
    'app/app.modules.js',
    'app/controllers/VisualizeController.js',
    'app/services/VisualizeService.js',
    'app/directives/VisualizeDirective.js',
    'assets/js/data.js'
];
includeJS.forEach(function (src) {
    var script = document.createElement('script');
    script.type = "text/javascript";
    script.src = src;
    script.async = false;
    document.head.appendChild(script);
});