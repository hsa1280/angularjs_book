angular.module("sportsStore")
.constant('productUrl', "http://localhost:5500/products/")
.controller("sportsCtrl", function($scope, $http, productUrl) {

	$http.get(productUrl)
		.success(function(data) {
			$scope.products = data;
		});
})
