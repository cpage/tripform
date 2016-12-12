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
            component: 'login',
            params: {
                explicitReturnState: null
            },
            resolve: {
                returnState: getReturnState
            }
        });

        $urlRouterProvider.otherwise('/users');
    }

    getReturnState.$inject = ['$state', '$q'];
    function getReturnState($state, $q) {
        console.log($state);
        console.log($state.params);
        if($state.params.explicitReturnState) {
            return {name: $state.params.name, params: null};
        }
        
        return {name: $state.current.name, params: $state.current.params};
    }
    
} ());