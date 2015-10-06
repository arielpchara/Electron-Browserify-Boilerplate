var angular = require('angular');

var app = angular.module('app', [])
  .directive("app", function() {
    return {
      sctrict: "E",
      templateUrl: "templates/app.html"
    }
  });
