(function () {
    'use strict';

    // Usage:
    // 
    // Creates:
    // 

    angular
        .module('app.users')
        .component('users', {
            templateUrl: 'app/users/users.html',
            controller: usersController
        });

    usersController.$inject = ['UsersService', 'userRoles', '$filter'];
    function usersController(UsersService, userRoles, $filter) {
        /*jshint -W040 */
        var $ctrl = this;

        $ctrl.saveUser = function (data, index) {

            UsersService.saveUser(data).then(function(data) {
                $ctrl.users[index] = data;
            });
        };

        $ctrl.removeUser = function (index) {
            UsersService.deleteUser($ctrl.users[index]._id).then(function(result) {
                $ctrl.users.splice(index, 1);
            });
            
        };

        $ctrl.addUser = function () {
            $ctrl.users.push({});
        };

        $ctrl.cancel = function (form, index) {
            if (form.$data._id)
                form.$cancel();
            else
                $ctrl.users.splice(index, 1);
        };

        $ctrl.requiredField = function(name, val) {
            if(!val) {
                return name + ' is required.';
            }
        };

        $ctrl.validatePassword = function(val, id) {
            if(!id && !val) {
                return 'password is reuired';
            }
        };
        ////////////////

        $ctrl.$onInit = function () {
            UsersService.getAllUsers().then(function(users) {
                $ctrl.users = users;
            });
            $ctrl.roles = userRoles;
        };

        $ctrl.$onChanges = function (changesObj) { };
        $ctrl.$onDestory = function () { };
    }
})();