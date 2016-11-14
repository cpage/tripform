(function () {
    'use strict';

    angular
        .module('app.core')
        .config(configureRoutes);
    

    //////////
    configureRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];

    function configureRoutes($stateProvider, $urlRouterProvider) {
        console.log('configuring core routes...');
        $urlRouterProvider.otherwise('/users');
    }
    
} ());