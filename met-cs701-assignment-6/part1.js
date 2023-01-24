angular.module('myApp', [])
 .controller('HelloController', function ($scope) {
		$scope.greeting = "Hello World 123";
        $scope.delimiter = "_";
    })

 .filter('separater', function () {
	return function (value,scope) {
		if (angular.isString(value)) {
			return value.replace(/\s+/g, scope.delimiter);
		} else {
			return value;
		}
	};
 });

