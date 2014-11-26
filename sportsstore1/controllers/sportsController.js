angular.module("sportsStore")
.constant('productUrl', "http://localhost:5500/products/")
.controller("sportsCtrl", function($scope, $http, productUrl) {

	$http.get(productUrl)
		.success(function(data) {
			$scope.products = data;
			// We can't define a property in this way: $scope.data.products, since the $scope.data is undefined.
		});
})
