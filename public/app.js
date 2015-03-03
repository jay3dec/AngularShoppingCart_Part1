'use strict';


angular.module('shoppingCart', [
    'ngRoute',
    'cart',
    'checkout' 
]).
config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({
        redirectTo: '/cart'
    });
}]);
