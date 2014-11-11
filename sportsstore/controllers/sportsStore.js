angular.module("sportsStore")
.constant("productListPageCount", 3)
.constant('productsUrl', "http://localhost:5500/products")
.controller("sportsStoreCtrl", function ($scope, $filter, $http,
    hightLightClass,productListPageCount, productsUrl) {

    // $scope.data = {
    //     products: [
    //         { name: "Product #1", description: "A product",
    //             category: "Category #1", price: 100 },
    //         { name: "Product #2", description: "A product",
    //             category: "Category #1", price: 110 },
    //         { name: "Product #3", description: "A product",
    //             category: "Category #2", price: 210 },
    //         { name: "Product #4", description: "A product",
    //             category: "Category #3", price: 202 }]
    // };

    $scope.data = {};

    $http.get(productsUrl)
        .success( function(data) {
            $scope.data.products = data;
        })
        .error( function(error) {
            $scope.data.error = error;
        })

    $scope.selectedPage = 1;
    $scope.pageSize = productListPageCount;

    $scope.selectPage = function( newPage ) {
        $scope.selectedPage = newPage;
    }
});
