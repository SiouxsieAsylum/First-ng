app.controller('myCtrl', function($scope){
	$scope.age = 18;
	$scope.sex = 'F';
	$scope.location = 'NY'
	$scope.usernames = ['Tom123','xXx_bl0od_lvr_xXx','mmckenzie']
	$scope.pressStatus = "Unpressed"
	$scope.changeText = () => {
		$scope.pressStatus = "Pressed"
	}
})