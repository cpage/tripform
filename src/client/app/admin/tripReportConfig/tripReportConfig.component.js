(function () {
    'use strict';

    // Usage:
    // 
    // Creates:
    // 

    angular
        .module('app.admin.tripReportConfig')
        .component('tripReportConfig', {
            templateUrl: 'app/admin/tripReportConfig/tripReportConfig.component.html',
            controller: tripReportConfigController
        });

    tripReportConfigController.$inject = ['$state', 'TripReportConfigSvc'];

    function tripReportConfigController($state, TripReportConfigSvc) {
        var $ctrl = this;


        ////////////////

        $ctrl.$onInit = function () {
            console.log('tripReportConfig controller init...');
            TripReportConfigSvc.getAll().then(function(configs) {
                $ctrl.tripReportConfigs = configs;
                console.log('transferring to the first config...');

                $state.go('.details', {
                    id: $ctrl.tripReportConfigs[0]._id
                });
            });
            
        };
        $ctrl.$onChanges = function (changesObj) {};
        $ctrl.$onDestory = function () {};
    }
})();