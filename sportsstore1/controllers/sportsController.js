angular.module("sportsStore")
.constant('productUrl', "http://localhost:5500/products/")
.constant("orderUrl", "http://localhost:5500/orders")
.controller("sportsCtrl", function($scope, $http, $location, orderUrl, cart, productUrl) {

	$scope.number = 10;
	$http.get(productUrl)
		.success(function(data) {
			$scope.products = data;
			// We can't define a property in this way: $scope.data.products, since the $scope.data is undefined.
		});

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
