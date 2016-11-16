(function () {
    'use strict';

    angular
        .module('app.users', [
            'app.core',
            'xeditable'
        ])
        .run(function (editableOptions) {
            editableOptions.theme = 'bs3';
        });

})();