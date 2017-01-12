(function() {
    'use strict';

    var app = angular.module('app', ['templates', 'ui.router']);

    /*app.config(function($stateProvider, $urlRouterProvider, $httpProvider) {

        $urlRouterProvider.otherwise("/home");

        $stateProvider
            .state('home', {
                url: "/home",
                controller:"HomeCtrl",
                templateUrl: "app/views/home/home.html"
            })
            .state('dashboard', {
                url: "/dashboard",
                controller:"DashboardCtrl",
                templateUrl: "app/views/dashboard/dashboard.html"
            })
            .state('settings', {
                url: "/settings",
                controller:"NfsCtrl",
                templateUrl: "app/views/settings/settings.html"
            });
    }).run(function($rootScope, $state, $http) {
        $rootScope.go = function(value) {
            $state.go(value);
        };

        $http.defaults.transformRequest.push(function (data) {
            $rootScope.progress = true;
            return data;
        });
        $http.defaults.transformResponse.push(function(data){
            $rootScope.progress = false;

            return data;
        });

    });*/
})();