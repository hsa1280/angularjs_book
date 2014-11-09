angular.module("exampleApp", [])
.controller("defaultCtrl", function ($scope, $http) {
    $scope.products = [
            { id: 0, name: "Dummy1", category: "Test", price: 1.25 },
            { id: 1, name: "Dummy2", category: "Test", price: 2.45 },
            { id: 2, name: "Dummy3", category: "Test", price: 4.25 }];
});
