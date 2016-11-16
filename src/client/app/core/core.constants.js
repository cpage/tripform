(function () {
    'use strict';

    angular
        .module('app.core')
        .constant('userRoles', [{
            id: 0,
            name: 'User'
        },
        {
            id: 1,
            name: 'Admin'
        }
        ]);
} ());