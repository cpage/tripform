(function () {
    'use strict';

    angular
        .module('app.users')
        .service('UsersService', UsersService);

    UsersService.$inject = ['$http'];
    function UsersService($http) {
        this.getAllUsers = getAllUsers;

        ////////////////
        function getAllUsers() {
            return [{
                _id: '123',
                username: 'cpage'
            }, {
                _id: '456',
                username: 'llo'
            }, {
                _id: '789',
                username: 'rburke'
            }];
        }
    }
})();