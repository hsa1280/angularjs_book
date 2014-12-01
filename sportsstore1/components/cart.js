angular.module("cart", [])
.factory("cart", function() {
	var shoppingCart = [];
	return {
		addToCart: function(product) {
			var isExisted = false;
			if(shoppingCart.length == 0) {
				shoppingCart.push({
					count: 1,
					id: product.id,
					price: product.price,
					name: product.name
				});
			}
			else {
				for(var i = 0; i < shoppingCart.length; i++) {
					if(shoppingCart[i].id == product.id) {
						shoppingCart[i].count++;
						isExisted = true;
						break;
					}
				}
				if(!isExisted) {
					shoppingCart.push({
						count: 1,
						id: product.id,
						price: product.price,
						name: product.name
					});
				}
			}
			console.log("shopping cart info " + shoppingCart);
		},

		getShoppingCart: function() {
			return shoppingCart;
		},

		removeProduct: function(product) {
			for(var i = 0; i < shoppingCart.length; i++) {
				if(shoppingCart[i].id == product.id) {
					shoppingCart.splice(i, 1);
					break;
				}
			}
		}
	}
})
.directive("cartSummary", function(cart) {
	return {
		restrict: "E",
		templateUrl: "views/cartSummary.html",
		controller: function($scope) {
			$scope.getItemCount = function() {
				var totalItems = 0;
				var cartData = cart.getShoppingCart();

				for(var i = 0; i < cartData.length; i++) {
					totalItems += cartData[i].count;
				}
				return totalItems;
			}

			$scope.totalPrice = function() {
				var cartData = cart.getShoppingCart();
				var total = 0;
				for(var i=0; i< cartData.length; i++) {
					total += cartData[i].count * cartData[i].price;
				}

				return total;
			}
		}
	}
})