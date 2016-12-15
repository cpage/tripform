(function () {
    'use strict';

    // Usage:
    // 
    // Creates:
    // 

    angular
        .module('app.admin.tripReportConfig')
        .component('tripReportConfigDetails', {
            templateUrl: 'app/admin/tripReportConfig/tripReportConfigDetails.component.html',
            controller: tripReportConfigDetailsController,
            bindings: {
                configId: '<',
            },
        });

    tripReportConfigDetailsController.$inject = [];

    function tripReportConfigDetailsController() {
        var $ctrl = this;

        $ctrl.addHeading = function() {
            $ctrl.tripReportConfig.configHeadings.push({
                id: _.maxBy($ctrl.tripReportConfig.configHeadings, 'id').id + 1,
                text: '',
                description: '',
                configQuestions: [{
                    id: 1,
                    question: '',
                    responseType: '',
                    isRequired: false,
                    p15FieldName: ''
                }]
            });
        };

        $ctrl.addQuestion = function(heading) {
            heading.configQuestions.push({
                id: _.maxBy(heading.configQuestions, 'id').id + 1,
                question: '',
                responseType: '',
                isRequired: false,
                p15FieldName: ''
            });
        };

        $ctrl.removeHeading = function(index) {
            $ctrl.tripReportConfig.configHeadings.splice(index, 1);
        };

        $ctrl.removeQuestion = function(heading, index) {
            heading.configQuestions.splice(index, 1);
        };
        ////////////////


        $ctrl.$onInit = function () {
            console.log('in tripReportConfigDetails controller...');
            $ctrl.tripReportConfig = {
                configHeadings: [{
                    id: 1,
                    text: "heading 1",
                    description: "description 1",
                    configQuestions: [{
                        id: 1,
                        question: 'what is question 1?',
                        responseType: '3',
                        isRequired: true,
                        p15FieldName: ''
                    }, {
                        id: 2,
                        question: 'what is question 2?',
                        responseType: '1',
                        isRequired: false,
                        p15FieldName: ''
                    }, {
                        id: 3,
                        question: 'what is question 1?',
                        responseType: '2',
                        isRequired: true,
                        p15FieldName: ''
                    }]
                }, {
                    id: 2,
                    text: "heading 2",
                    description: "description 2",
                    configQuestions: [{
                        id: 1,
                        question: 'what is question 1?',
                        responseType: '3',
                        isRequired: true,
                        p15FieldName: ''
                    }, {
                        id: 2,
                        question: 'what is question 2?',
                        responseType: '1',
                        isRequired: false,
                        p15FieldName: ''
                    }, {
                        id: 3,
                        question: 'what is question 1?',
                        responseType: '2',
                        isRequired: true,
                        p15FieldName: ''
                    }]
                }, {
                    id: 3,
                    text: "heading 3",
                    description: "description 3",
                    configQuestions: [{
                        id: 1,
                        question: 'what is question 1?',
                        responseType: '3',
                        isRequired: true,
                        p15FieldName: ''
                    }, {
                        id: 2,
                        question: 'what is question 2?',
                        responseType: '1',
                        isRequired: false,
                        p15FieldName: ''
                    }, {
                        id: 3,
                        question: 'what is question 1?',
                        responseType: '2',
                        isRequired: true,
                        p15FieldName: ''
                    }]
                }, ]
            };
        };
        $ctrl.$onChanges = function (changesObj) {};
        $ctrl.$onDestory = function () {};
    }
})();