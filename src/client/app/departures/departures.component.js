(function() {
'use strict';

    // Usage:
    // 
    // Creates:
    // 

    angular
        .module('app.departures')
        .component('departures', {
            templateUrl: 'app/departures/departures.component.html',
            controller: departuresController,
        });

    departuresController.$inject = ['DeparturesSvc'];
    function departuresController(DeparturesSvc) {
        var $ctrl = this;
        

        $ctrl.loadAllDepartures = function() {
            console.log('component::getting all departures')
            $ctrl.loadingAllDepartures = true;
            DeparturesSvc.getAllDepartures().then(function(departures) {
                console.log('component::setting departures var to data');
                console.log(departures);
                $ctrl.departures = departures;
                $ctrl.loadingAllDepartures = false;
            });
        };

        $ctrl.loadMyDepartures = function() {
            $ctrl.loadingMyDepartures = true;
            DeparturesSvc.getMyDepartures().then(function(departures) {
                $ctrl.departures = departures;
                $ctrl.loadingMyDepartures = false;
            });
        };

        ////////////////

        $ctrl.$onInit = function() {
            $ctrl.loadingAllDepartures = false;
            $ctrl.loadingMyDepartures = false;
        };

        $ctrl.$onChanges = function(changesObj) { };
        $ctrl.$onDestory = function() { };
    }
})();