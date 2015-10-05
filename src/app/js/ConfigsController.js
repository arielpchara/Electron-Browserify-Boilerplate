module.exports = function(app) {

    app.controller('ConfigsController', function($scope) {

        var configs = app.db('configs');

        $scope.path = configs.get('path') || '';
        $scope.gulpfile = configs.get('gulpfile') || '';
        $scope.editor_exec = configs.get('editor_exec') || 'atom';
        $scope.terminal_exec = configs.get('terminal_exec') || 'start /D %cd% cmd';

        $scope.sql = {
            server: configs.get('sql.server'),
            user: configs.get('sql.user'),
            password: configs.get('sql.password'),
            database: configs.get('sql.database')
        };

        console.log('controller',configs);

        //"C:\Program Files\ConEmu\ConEmu64.exe" "/here" /dir "%cd%" /cmd {{Shells::cmd}}

        $scope.$watch('path',function () {
            configs.set('path',$scope.path);
        });

        $scope.$watch('gulpfile',function () {
            configs.set('gulpfile',$scope.gulpfile);
        });

        $scope.$watch('editor_exec',function () {
            configs.set('editor_exec',$scope.editor_exec);
        });

        $scope.$watch('terminal_exec',function () {
            configs.set('terminal_exec',$scope.terminal_exec);
        });

        $scope.$watch('sql',function () {
            console.log('w',$scope.sql);
            configs.set('sql',$scope.sql);
        });

        $scope.$watchGroup(['path','editor_exec','terminal_exec','gulpfile','sql'],function () {
            console.log('save', $scope.sql);
            app.db.save();
        });


        $scope.$on('webkitdirectory.change',function (e, path) {
            $scope.path = path;
            $scope.$digest();
        });

        $scope.$on('fileselector.change',function (e, path) {
            $scope.editor_exec = path;
            $scope.$digest();
        });

    });

    app.config(function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/config', {
                templateUrl: 'configs.html',
                controller: 'ConfigsController'
            });
    });

};
