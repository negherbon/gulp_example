(function() {
  'use strict';

  var app = angular.module('app', ['ui.router', 'templates']);

  app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('app', {
        abstract: true,
        templateUrl: 'app/main/mainTemplate.html',
        controller: 'mainController'
      }).state({
        url: '/dashboard',
        name: 'app.dashboard',
        views: {
          'main@app': {
            templateUrl: 'app/views/dashboard/dashboard.html',
            controller: 'dashboardController'
          }
        },
        menu: 'clientsMenu'
      }).state({
        url: '/settings',
        name: 'app.settings',
        views: {
          'main@app': {
            templateUrl: 'app/views/settings/settings.html',
            controller: 'settingsController'
          }
        },
        menu: 'clientsMenu'
      });

      $urlRouterProvider.otherwise('/dashboard');
  });
})();
