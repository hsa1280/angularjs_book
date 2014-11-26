angular.module("customFilter",[])
.filter("categoryFilter", function() {
	return function(data, propertyName) {
		var keys = [];
		for(var i = 0; i < data.length; i++) {
			if(keys.indexOf(data[i][propertyName]) == -1) {
				keys.push(data[i][propertyName]);
			}
		}
		return keys;
	}
})
.filter("pageCountFilter", function() {
	return function(data, itemsPerPage) {
		var page = [];
		for(var i = 1; i <= Math.ceil(data.length/itemsPerPage); i++) {
			page.push(i);
		}
		console.log("before reverse " + page);
		page.reverse();
		console.log("after reverse " + page);
		return page;
	}
})
.filter("pageSelectFilter", function($filter) {
	return function(data, selectedPage, itemsPerPage) {
		var startIndex = (selectedPage - 1) * itemsPerPage;
		return $filter('limitTo')((data.slice(startIndex)), itemsPerPage);
	}
})