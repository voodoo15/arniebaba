var arniebaba = angular.module('arniebaba', ['ngRoute']);

arniebaba.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

  $routeProvider
    .when('/', {
      templateUrl: 'pages/main.html',
      controller: 'mainController'
    })

    .when('/cart', {
      templateUrl: 'pages/cart.html',
      controller: 'cartController'
    });

}]);

arniebaba.controller('mainController', ['$scope', '$location', function ($scope, $location) {

}]);

arniebaba.controller('cartController', ['$scope', '$location', function ($scope, $location) {

}]);
