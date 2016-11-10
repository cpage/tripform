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
            controller: usersController,
            
            bindings: {
                Binding: '=',
            },
        });

    usersController.$inject = ['UsersService'];
    function usersController(usersService) {
        var $ctrl = this;
        

        ////////////////

        $ctrl.$onInit = function() { };
        $ctrl.$onChanges = function(changesObj) { };
        $ctrl.$onDestory = function() { };
    }
})();