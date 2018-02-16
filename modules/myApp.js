const app = angular.module('myApp', ['ngAnimate']);
app.run($rootScope => {
	$rootScope.color = "blue"
})