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
            var user = $ctrl.users[index];
            if (!data.id) {
                user._id = data.id = Math.max.apply(Math, $ctrl.users.map(function (u) {
                    if (u._id) return u._id;

                    return 0;
                })) + 1;
            }

            // user.username = data.username;
            // user.password = data.password;
            // user.p15Id = data.p15Id;
            // user.p15Team = data.p15Team;
            // user.role = data.role;            
        };

        $ctrl.removeUser = function (index) {
            $ctrl.users.splice(index, 1);
        };

        $ctrl.addUser = function () {
            $ctrl.users.push({});
        };

        $ctrl.cancel = function (form, index) {
            if (form.$data.id)
                form.$cancel();
            else
                $ctrl.users.splice(index, 1);
        };

        ////////////////

        $ctrl.$onInit = function () {
            $ctrl.users = UsersService.getAllUsers();
            $ctrl.roles = userRoles;
        };

        $ctrl.$onChanges = function (changesObj) { };
        $ctrl.$onDestory = function () { };
    }
})();