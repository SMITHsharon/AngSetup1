
var app = angular.module("zoeFoods", []);

app.controller("FoodCtrl", ($scope) => {

	$scope.tryThis = () => {
		$scope.showPie = true;
	};

	$scope.recipe = () => {
		$scope.showPie = false;
		$scope.showRecipe = true;
		$scope.buttonLabel = "Clear";
	};

	$scope.clearAll = () => {
		$scope.showRecipe = false;
	};

});