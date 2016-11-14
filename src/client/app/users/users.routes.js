(function () {
    'use strict';

    angular
        .module('app.users')
        .config(configureRoutes);
    

    //////////
    configureRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];

    function configureRoutes($stateProvider, $urlRouterProvider) {
        console.log('configuring user routes...');
        $stateProvider
            .state('users', {
                url: '/users',
                component: 'users'
            })
            .state('userDetails', {
                url: '/users/:id',
                template: '<user-details userid="\'123\'"></user-details>',
            });
    }
} ());