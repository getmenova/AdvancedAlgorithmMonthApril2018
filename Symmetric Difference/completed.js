function sym() {
	var args = Array.prototype.slice.call(arguments);
	var getDiff = function(arr1, arr2) {
		function filterFunction(arr1, arr2) {
			return arr1.filter(function(item) {
				return arr2.indexOf(item) === -1;
			});
		}
		return filterFunction(arr1, arr2).concat(filterFunction(arr2, arr1)).filter(function(item, idx, arr) {
			return arr.indexOf(item) === idx;
		});
	};
	return args.reduce(getDiff, []);
}