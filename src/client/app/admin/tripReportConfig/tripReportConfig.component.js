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

    tripReportConfigController.$inject = ['$state'];

    function tripReportConfigController($state) {
        var $ctrl = this;


        ////////////////

        $ctrl.$onInit = function () {
            console.log('tripReportConfig controller init...');
            $ctrl.tripReportConfigs = [{
                id: 1,
                name: 'config 1'
            }, {
                id: 2,
                name: 'config 2'
            }];
            console.log('transferring to the first config...');
            $state.go('.details', {
                id: $ctrl.tripReportConfigs[0].id
            });
        };
        $ctrl.$onChanges = function (changesObj) {};
        $ctrl.$onDestory = function () {};
    }
})();