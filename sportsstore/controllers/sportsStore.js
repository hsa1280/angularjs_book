angular.module("sportsStore")
.constant('productsUrl', "http://localhost:5500/products")
.controller("sportsStoreCtrl", function ($scope, $http, productsUrl) {

    $scope.data = {};

    $http.get(productsUrl)
        .success( function(data) {
            $scope.data.products = data;
        })
        .error( function(error) {
            $scope.data.error = error;
        })
});
