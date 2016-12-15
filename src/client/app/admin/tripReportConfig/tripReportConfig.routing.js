(function () {
    'use strict';

    angular
        .module('app.admin.tripReportConfig')
        .config(configureRoutes);


    //////////
    configureRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];

    function configureRoutes($stateProvider, $urlRouterProvider) {

        console.log('configuring tripReportconfig routes...');
        $stateProvider
            .state('tripReportConfig', {
                url: '/admin/tripreports',
                component: 'tripReportConfig',
                resolve: {
                    valid: ['AuthSvc', function(AuthSvc) {
                        return AuthSvc.redirectIfNotAuthenticated();
                    }]
                }
            }).state('tripReportConfig.details', {
                url: '/:id',
                component: 'tripReportConfigDetails',
                resolve: {
                    configId: ['$stateParams', function($stateParams) {
                        console.log('resolving configId...');
                        console.log('$stateParams.id: ' + $stateParams.id)
                        return $stateParams.id;
                    }]
                }
            });
    }

     

} ());