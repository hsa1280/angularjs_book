angular.module("sportsStore")
.constant('hightLightClass', "btn-primary")
.controller('productListCtrl', function( $scope, $filter, hightLightClass){
	
	var selectedCategory = null;

	$scope.selectItem = function( item ) {
        selectedCategory = item;
        $scope.selectedPage = 1;
	}

    $scope.productsFilter = function( item ) {
        return selectedCategory == null || selectedCategory == item.category;
    } 

    $scope.getCategoryClass = function( item ) {
    	return selectedCategory == item ? hightLightClass : null;
	}

	$scope.getPageClass = function( page ) {
    	return $scope.selectedPage == page? hightLightClass : null;
	}
})