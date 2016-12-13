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

    departuresController.$inject = ['DeparturesSvc', '$timeout'];
    function departuresController(DeparturesSvc, $timeout) {
        var $ctrl = this;
        
        $ctrl.loadDepartures = function(forMe) {
            console.log('component::getting all departures');
            $ctrl.loadingDepartures = true;
            $timeout(function() {
                if($ctrl.loadingDepartures)
                    $ctrl.showLoadingSpinner = true;
            }, 250);
            
            var svcCall = forMe ? DeparturesSvc.getMyDepartures() : DeparturesSvc.getAllDepartures();
            return svcCall.then(function(departures) {
                $ctrl.loadingDepartures = $ctrl.showLoadingSpinner = false;
                console.log('component::setting departures var to data');
                $ctrl.departures = departures;
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