(function () {
    'use strict';

    // Usage:
    // 
    // Creates:
    // 

    angular
        .module('app.users')
        .component('userDetails', {
            templateUrl: 'app/users/userDetails.html',
            controller: userDetailsController,
        });

    userDetailsController.$inject = ['UsersService', '$stateParams'];
    function userDetailsController(UsersService, $stateParams) {
        var $ctrl = this;
        this.userid = $stateParams.id;        


        ////////////////

        $ctrl.$onInit = function () { };
        $ctrl.$onChanges = function (changesObj) { };
        $ctrl.$onDestory = function () { };
    }
})();