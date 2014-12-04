angular.module("sportsStore")
.constant("orderUrl", "http://localhost:5500/orders")
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

	// $scope.sendOrder = function(shippingData) {
	// 	var data = angular.copy(shippingData);
	// 	data.products = $scope.cartData;
	// 	$http.post(orderUrl, data)
	// 	.success(function(data) {
	// 		console.log("Post data success");
	// 	})
	// 	.error(function (error) {
	// 		$scope.orderError = error;
	// 	})
	// 	.finally(function() {
	// 		$location.path("/thankyou");
	// 	});

	// }

    $scope.sendOrder = function (shippingDetails) {
	    var order = angular.copy(shippingDetails);
	    order.products = cart.getShoppingCart();
	    $http.post(orderUrl, order)
        .success(function (data) {
        	console.log("success");
            $scope.orderId = data.id;
            cart.getShoppingCart().length = 0;
        })
        .error(function (error) {
        	console.log("error");
            $scope.orderError = error;
        }).finally(function () {
        	console.log("finally");
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