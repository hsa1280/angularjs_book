angular.module("sportsStore")
.constant('hightLightClass', "btn-primary")
.constant("productListPageCount", 3)
.controller("sportsStoreCtrl", function ($scope, $filter, 
    hightLightClass,productListPageCount) {

    $scope.data = {
        products: [
            { name: "Product #1", description: "A product",
                category: "Category #1", price: 100 },
            { name: "Product #2", description: "A product",
                category: "Category #1", price: 110 },
            { name: "Product #3", description: "A product",
                category: "Category #2", price: 210 },
            { name: "Product #4", description: "A product",
                category: "Category #3", price: 202 }]
    };

    var selectedCategory = null;

    $scope.selectedPage = 1;
    $scope.pageSize = productListPageCount;
    $scope.selectItem = function( item ) {
        selectedCategory = item;
        $scope.selectedPage = 1;
    }

    $scope.selectPage = function( newPage ) {
        $scope.selectedPage = newPage;
        console.log(newPage);
    }

    $scope.productsFilter = function( item ) {

        return selectedCategory == null || selectedCategory == item.category;
    } 

    $scope.getClass = function( item ) {
        return selectedCategory == item ? hightLightClass : null;
    }

    $scope.getPageClass = function( page ) {
        return $scope.selectedPage == page? hightLightClass : null;
    }
});
