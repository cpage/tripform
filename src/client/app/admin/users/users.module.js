(function () {
    'use strict';

    angular
        .module('app.admin.users', [
            'app.core',
            'xeditable'
        ])
        .run(function (editableOptions) {
            editableOptions.theme = 'bs3';
        });

})();