(function() {
'use strict';

    // Usage:
    // 
    // Creates:
    // 

    angular
        .module('app.core')
        .component('shell', {
            //template:'htmlTemplate',
            templateUrl: 'app/core/shell/shell.html',
            controller: ShellController,
            bindings: {
                Binding: '=',
            },
        });

    //ShellController.$inject = [''];
    function ShellController() {
        var $ctrl = this;
        console.log('in the shell component controller...');

        ////////////////

        $ctrl.$onInit = function() { };
        $ctrl.$onChanges = function(changesObj) { };
        $ctrl.$onDestory = function() { };
    }
})();