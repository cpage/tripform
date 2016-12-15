(function () {
    'use strict';

    angular
        .module('app.admin.users')
        .config(configureRoutes);


    //////////
    configureRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];

    function configureRoutes($stateProvider, $urlRouterProvider) {

        console.log('configuring user routes...');
        $stateProvider
            .state('users', {
                url: '/admin/users',
                component: 'users',
                resolve: {
                    valid: ['AuthSvc', function(AuthSvc) {
                        return AuthSvc.redirectIfNotAuthenticated();
                    }]
                }
            });
    }

     

} ());