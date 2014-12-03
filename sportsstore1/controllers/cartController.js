angular.module("sportsStore")
.constant("orderUrl", "http://localhost:5500/orders/")
.controller("cartCtrl", function($scope, $http, $location, cart, orderUrl) {
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

	$scope.removeProduct = function(product) {
		cart.removeProduct(product);
	}

	$scope.sendOrder = function(shippingData) {
		var data = angular.copy(shippingData);
		data.products = $scope.cartData;
		$http.post(orderUrl, data)
		.success(function(data) {

		})
		.error(function (error) {

		})
		.finally(function() {
			$location.path("/thankyou");
		});

	}
})
.directive("deleteConfirm", function() {
	return {
		restrict: "A",
		link: function(scope, element, attrs) {
			element.on("click", function() {
				var message = attrs["confirmMessage"];
				var toCall = attrs["deleteConfirm"];
				if(confirm(message)) {
					scope.$apply(toCall);
				}
			})
		}
	}
})