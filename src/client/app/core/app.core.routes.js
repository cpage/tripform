(function () {
    'use strict';

    angular
        .module('app.core')
        .config(configureRoutes);
    

    //////////
    configRoutes.$inject = ['$stateProvider'];

    function configureRoutes($stateProvider) {
        $stateProvider
            .state('shell', {
                url: '/',
                template: '<shell></shell>', // users component
                controller: 'UserController as vm',
            });
    }
} ());