(function () {
    'use strict';

    angular
        .module('app.departures')
        .service('DeparturesSvc', DepartureSvc);

    DepartureSvc.$inject = ['$http'];
    function DepartureSvc($http) {
        this.getAllDepartures = getAllDepartures;
        this.getMyDepartures = getMyDepartures;
        ////////////////

        function getAllDepartures() {
            return $http.get('/api/departures').then(function(response) {
                return response.data;
            });
        }

        function getMyDepartures() {
            return $http.get('/api/departures/my').then(function(response) {
                return response.data;
            });
        }
    }
})();