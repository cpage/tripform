(function() {
'use strict';

    // Usage:
    // 
    // Creates:
    // 

    angular
        .module('app.core')
        .component('Shell', {
            //template:'htmlTemplate',
            templateUrl: 'app/core/shell/shell.html',
            controller: ShellController,
            bindings: {
                Binding: '=',
            },
        });

    ShellController.$inject = ['dependency1'];
    function ShellController(dependency1) {
        var $ctrl = this;
        

        ////////////////

        $ctrl.$onInit = function() { };
        $ctrl.$onChanges = function(changesObj) { };
        $ctrl.$onDestory = function() { };
    }
})();