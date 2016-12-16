(function () {
    'use strict';

    angular
        .module('app.admin.tripReportConfig')
        .service('TripReportConfigSvc', TripReportConfigSvc);

    TripReportConfigSvc.inject = ['$http'];
    function TripReportConfigSvc($http) {
        this.getAll = getAll;
        this.getById = getById;
        ////////////////

        function getAll() {
            return $http.get('/api/tripReportConfigs').then(function(response) {
                return response.data;
            });
        }

        function getById(id) {
            return $http.get('/api/tripReportConfigs/' + id).then(function(response) {
                return response.data;
            });
        }

        function update(config) {
            return $http.put('/api/tripReportConfigs/' + id).then(function(response) {
                return response.data;
            });
        }
    }
})();