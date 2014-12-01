angular.module("sportsStore")
.constant('categoryClass', "btn btn-block btn-primary")
.constant('pageClass', "btn btn-primary")
.controller("productListCtrl", function($scope, cart, categoryClass, pageClass) {

	// $scope.data = { 
	// 	 products: 
	// 	 [
	// 		 { name: "Product #1", description: "A product", category: "Category #1", price: 100 },
	// 		 { name: "Product #2", description: "A product", category: "Category #1", price: 110 },
	// 		 { name: "Product #3", description: "A product", category: "Category #2", price: 210 },
	// 		 { name: "Product #4", description: "A product", category: "Category #3", price: 202 }
	// 	 ]
	// };

	$scope.itemsPerPage = 3;
	$scope.selectedPage = 1;
	$scope.cart = [];

	var selectedCategory = null;

	$scope.selectCategory = function(category) {
		selectedCategory = category;
		$scope.selectedPage = 1;
	}

	$scope.selectPage = function(page) {
		$scope.selectedPage = page;
	}

	$scope.productsFilter = function(product) {
		return selectedCategory == null || selectedCategory == product.category;
	}

	$scope.getCategoryClass = function(category) {

		return selectedCategory == category? categoryClass : "btn btn-block btn-default";
	}

	$scope.getPageClass = function(page) {

		return $scope.selectedPage == page? pageClass : "btn btn-default";
	}

	$scope.shoppingCart = function() {
		$scope.cart = cart.getShoppingCart();
		return $scope.cart;
	}

	$scope.addProduct = function(product) {
		cart.addToCart(product);
		console.log("product info: id-" + product.id + ", name-" + product.name + ", price-" + product.price);
		console.log("Added to cart");
		console.log($scope.shoppingCart());
	}

	$scope.removeProduct = function(product) {
		cart.removeProduct(product);
	}
})