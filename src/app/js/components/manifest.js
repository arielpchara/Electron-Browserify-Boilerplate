var angular = require('angular');
var sql = require('mssql');
var fs = require('fs');
// var xml = require('xml2js');
var moduleName = 'manifest';
var db = require('../db.js');
var _ = require('lodash');

angular.module(moduleName,[])
    .factory('updateXMLonServer',function ($q) {

        var sqlConfig = _.assign({},db('configs').get('sql'));

        var connection = new sql.Connection(sqlConfig, function (err) {});

        return function (manifest) {

            var deferred = $q.defer();
            var request = new sql.Request(connection);
            try {
                console.log(manifest);
                fs.readFile(manifest,function (err, data) {
                    data = data.toString().replace( /(<\?xml).*(\?>)/gi, '' );
                    request.query("exec pSetWidgetFromXML '"+data+"'",function (err, recordset) {
                        console.log(err,recordset);
                        if(err) deferred.reject('query/connection error '+err);
                        deferred.resolve(recordset);
                    });
                });
            } catch (err) {
                deferred.reject('readFile error '+err);
                console.error(err);
            }
            return deferred.promise;
        };

    });


module.exports = moduleName;
