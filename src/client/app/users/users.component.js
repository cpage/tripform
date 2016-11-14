(function() {
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

    usersController.$inject = ['UsersService'];
    function usersController(UsersService) {
        var $ctrl = this;
        $ctrl.users = UsersService.getAllUsers();

        ////////////////

        $ctrl.$onInit = function() { };
        $ctrl.$onChanges = function(changesObj) { };
        $ctrl.$onDestory = function() { };
    }
})();