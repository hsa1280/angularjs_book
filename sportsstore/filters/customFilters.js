angular.module("customFilters", [])
	.filter("unique", function() {
		return function( data, propertyName ) {
			var tempArr = [];
			var uniqueCategory = [];
			for( var i = 0; i < data.length; i++) {
				if( !tempArr[data[i][propertyName]] ) {
					tempArr[data[i][propertyName]] = true;
					uniqueCategory.push(data[i][propertyName]);
				}
			}

			return uniqueCategory;
		}
	})