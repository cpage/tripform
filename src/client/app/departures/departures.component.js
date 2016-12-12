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

    departuresController.$inject = [];
    function departuresController() {
        var $ctrl = this;
        

        ////////////////

        $ctrl.$onInit = function() { };
        $ctrl.$onChanges = function(changesObj) { };
        $ctrl.$onDestory = function() { };
    }
})();