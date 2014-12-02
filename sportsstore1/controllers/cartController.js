angular.module("sportsStore")
.controller("cartCtrl", function($scope, cart) {
	$scope.cartData = cart.getShoppingCart();

	$scope.subTotal = function(product) {
		var subtotal = 0;
		subtotal = product.count * product.price;
		return subtotal;
	}

	$scope.getTotal = function() {
		var total = 0;
		for(var i=0; i < $scope.cartData.length; i++) {
			total += $scope.cartData[i].count * $scope.cartData[i].price;
		}

		return total;
	}
})