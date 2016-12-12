(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('AuthSvc', AuthSvc);

    AuthSvc.$inject = ['$http', '$q', '$timeout', '$state'];
    function AuthSvc($http, $q, $timeout, $state) {

        var user = null;
        var deferredInit = null;

        var service = {
            login: login,
            logout: logout,
            user: user,
            isLoggedIn: isLoggedIn,
            redirectIfNotAuthenticated: redirectIfNotAuthenticated,
            init: init
        };

        return service;

        ////////////////

        function login(username, password) {
            return $http.post(
                '/api/auth',
                {
                    username: username,
                    password: password
                }
            )
                .then(function (response) {
                    service.user = response.data;
                    return {
                        success: true,
                        userData: user
                    };
                },
                function (errResponse) {
                    console.log('error response, returning something?');
                    if (errResponse.status === 401) {
                        return {
                            success: false,
                            userData: null
                        };
                    }
                    throw new Error(errResponse);
                }

                );
        }

        function logout() {
            return $http.post('/api/auth/logout')
            .then(function(response) {
                return response.data;
            });
        }

        function isLoggedIn() {
            return service.init().then(function() {
                console.log('current user: ' + service.user.username);
                return !!service.user;    
            });
            
        }

        function redirectIfNotAuthenticated() {
            console.log('validating if the user is logged in...');
            service.isLoggedIn().then(function(valid) {
                console.log('isLoggedIn promise handler - valid: ' + valid);
                if(valid) return true;
                $state.go('login', { explicitReturnState: 'users'});
                return false;
            });
        }

        function init() {
            if(!deferredInit) {

                deferredInit = $q.defer();

                console.log('checking for auth profile...');
                $http.get('/api/auth/profile').then(function(response) {
                    console.log('got profile response');
                    console.log(response.data);
                    service.user = response.data;
                    deferredInit.resolve();
                });
            }
            return deferredInit.promise;
        }
    }
})();