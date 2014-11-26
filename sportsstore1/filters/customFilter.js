angular.module("customFilter",[])
.filter("categoryFilter", function() {
	return function(data, propertyName) {
		if(angular.isArray(data) && angular.isString(propertyName)){
			var keys = [];
			for(var i = 0; i < data.length; i++) {
				if(keys.indexOf(data[i][propertyName]) == -1) {
					keys.push(data[i][propertyName]);
				}
			}
			return keys;
		}
	}
})
.filter("pageCountFilter", function() {
	return function(data, itemsPerPage) {
		if(angular.isArray(data) && angular.isNumber(itemsPerPage)){
			var page = [];
			for(var i = 1; i <= Math.ceil(data.length/itemsPerPage); i++) {
				page.push(i);
			}
			page.reverse();
			return page;
		}
	}
})
.filter("pageSelectFilter", function($filter) {
	return function(data, selectedPage, itemsPerPage) {
		if(angular.isArray(data) && angular.isNumber(selectedPage) && angular.isNumber(itemsPerPage)) {
			var startIndex = (selectedPage - 1) * itemsPerPage;
			return $filter('limitTo')((data.slice(startIndex)), itemsPerPage);
		}
	}
})