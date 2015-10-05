var angular = require("angular");

require("angular-route");
require("angular-sanitize");

var ngNotification = require("ng-notification-browserify");

var ngFilters = require("./filters.js");
// var manifest = require('./components/manifest.js');

var app = angular.module('app', ['ngRoute', 'ngSanitize', ngFilters, ngNotification]);

// configs
app.config(function($compileProvider) {
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(app):/);
});

app.db = require('./db.js');

require("./GulpController.js")(app);

require("./WidgetsController.js")(app);
require("./TasksController.js")(app);
require("./ConfigsController.js")(app);

require("./directives/webkitdirectory.js")(app);
