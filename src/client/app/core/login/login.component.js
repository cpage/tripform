(function () {
    'use strict';

    // Usage:
    // 
    // Creates:
    // 

    angular
        .module('app.core')
        .component('login', {
            templateUrl: 'app/core/login/login.component.html',
            controller: loginController,
        });

    loginController.$inject = ['AuthSvc', '$state', '$window'];
    function loginController(AuthSvc, $state, $window) {
        var $ctrl = this;

        $ctrl.submitLogin = function (userForm) {
            if (userForm.$invalid) {
                return;
            }

            AuthSvc.login($ctrl.username, $ctrl.password)
                .then(function (data) {
                    console.log('login: ' + data);
                    if (data.success) {
                        $state.go('users');
                    }
                    else {
                        $ctrl.errorMessage = 'Invalid username or password.';
                    }
                })
                .catch(function (err) {
                    $ctrl.errorMessage = 'General error, try again later.';
                });
        };

        ////////////////

        $ctrl.$onInit = function () {
            console.log('login component init');
            $window.document.getElementById('username').focus();
            AuthSvc.logout().then(function (data) {
                console.log('logout complete');
                console.log(data);
            });
        };
        $ctrl.$onChanges = function (changesObj) { };
        $ctrl.$onDestory = function () { };
    }
})();