(function () {
    'use strict';

    angular
        .module('app.core')
        .config(configureRoutes);
    

    //////////
    configureRoutes.$inject = ['$stateProvider'];

    function configureRoutes($stateProvider) {
        $stateProvider
            .state('shell', {
                url: '/',
                template: '<shell></shell>', // shell component
                controller: 'UserController as vm',
            });
    }
} ());