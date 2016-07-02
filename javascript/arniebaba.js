var arniebaba = angular.module('arniebaba', ['ngRoute']);

arniebaba.config(function ($routeProvider) {

  $routeProvider

  .when('/', {
    templateUrl: 'pages/main.html',
    controller: 'mainController'
  })

});

arniebaba.controller('mainController', ['$scope', '$location', function($scope, $location) {

}]);

arniebaba.controller('cartController', ['$scope', '$location', function($scope, $location) {

}]);
