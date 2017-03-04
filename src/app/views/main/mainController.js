(function() {
  'use strict';

  function mainController() {
    alert('hey');
  }

  angular.module('app').controller('mainController', [ mainController ]);
}());
