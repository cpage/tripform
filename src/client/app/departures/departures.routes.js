(function () {
    'use strict';

    angular
        .module('app.departures')
        .config(configureRoutes);


    //////////
    configureRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];

    function configureRoutes($stateProvider, $urlRouterProvider) {

        console.log('configuring departures routes...');
        $stateProvider
            .state('departures', {
                url: '/departures',
                component: 'departures',
                resolve: {
                    valid: ['AuthSvc', function(AuthSvc) {
                        return AuthSvc.redirectIfNotAuthenticated();
                    }]
                }
            });
    }

     

} ());