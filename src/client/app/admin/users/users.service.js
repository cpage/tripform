(function() {
    'use strict';

    angular
        .module('app.admin.users')
        .service('UsersService', UsersService);

    UsersService.$inject = ['$http', '$timeout'];
    function UsersService($http, $timeout) {
        this.getAllUsers = getAllUsers;
        this.saveUser = saveUser;
        this.deleteUser = deleteUser;

        var apiUrl = '/api/users/';
        ////////////////
        function getAllUsers() {
            return $http.get(apiUrl)
                .then(function(response) {
                    return response.data;
                });
        }

        function saveUser(user) {
            if (!user._id) {
                return $http.post(apiUrl, user).then(function(response) {
                    return response.data;
                });
            }

            return $http.put(apiUrl + user._id, user).then(function(response) {
                return response.data;
            });
        }

        function deleteUser(id) {
            return $http.delete(apiUrl + id).then(function(response) {
                return true;
            });
        }

    }
})();