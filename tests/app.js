angular.module("exampleApp", [])
    .controller("defaultCtrl", function ($scope, $http) {

    	$http.get("productData.json").success(function(data) {
    		$scope.products = data;
    	})
        $scope.counter = 0;

        $scope.incrementCounter = function() {
            $scope.counter++;
        }
    })
    .filter("labelCase", function() {
    	return function (value, reverse) {
			if (angular.isString(value)) {
				var intermediate = reverse ? value.toUpperCase() : value.toLowerCase();
				return (reverse ? intermediate[0].toLowerCase() :
					intermediate[0].toUpperCase()) + intermediate.substr(1);
			} else {
				return value;
			}
		};
    })
