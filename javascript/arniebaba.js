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
    })

}]);

arniebaba.controller('mainController', ['$scope', '$location', function ($scope, $location) {

  $scope.products = [
    {
      id: 'apl',
      description: 'apple',
      quantity: 1
    },
    {
      id: 'bna',
      description: 'banana',
      quantity: 1
    },
    {
      id: 'grp',
      description: 'grape',
      quantity: 1
    },
    {
      id: 'pch',
      description: 'peach',
      quantity: 1
    },
    {
      id: 'lch',
      description: 'lychee',
      quantity: 1
    },
    {
      id: 'ong',
      description: 'orange',
      quantity: 1
    }]

}]);

arniebaba.controller('cartController', ['$scope', '$location', function ($scope, $location) {

}]);

arniebaba.directive('product', function() {

  return {
    restrict: 'EACM',
    templateUrl: 'directives/product.html',
    replace: true,
    scope: {
      productId: '@',
      productDescription: '@',
      productQuantity: '@'
    }
  }

});
