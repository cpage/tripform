(function () {
    'use strict';

    angular
        .module('app.users')
        .config(configureRoutes);
    

    //////////
    configRoutes.$inject = ['$stateProvider'];

    function configureRoutes($stateProvider) {
        $stateProvider
            .state('users', {
                url: '/users',
                template: '<users></users>', // users component
                controller: 'UserController as vm',
            });
    }
} ());