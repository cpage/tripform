(function () {
    'use strict';

    angular
        .module('app.core')
        .config(configureRoutes);
    

    //////////
    configureRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];

    function configureRoutes($stateProvider, $urlRouterProvider) {
        console.log('configuring core routes...');
        $stateProvider.state('login', {
            url: '/login',
            component: 'login'
        });

        $urlRouterProvider.otherwise('/users');
    }
    
} ());