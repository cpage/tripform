(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('AuthSvc', AuthSvc);

    AuthSvc.$inject = ['$http', '$q', '$timeout'];
    function AuthSvc($http, $q, $timeout) {

        var user = null;

        var service = {
            login: login,
            logout: logout,
            user: user,
            isLoggedIn: isLoggedIn
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
                    user = response.data;
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
            return !!user;
        }
    }
})();