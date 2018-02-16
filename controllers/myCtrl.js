/*
	$scope is the object that is passed through the controller to the model. It's bound both ways so that the model and the controller always are in sync in teh event that the information changes on each end.  
	$scope is a regular javascript object, and each element has access to different scopes, i.e. with the usernames section, each li has access to the current repetition object, which is the current position in the array
	The app also has a $rootScope that I'm handling in the model and is universal to the entire application. 
	Do not use arrow functions
*/ 


app.controller('myCtrl', function($scope, $location){
	$scope.mySwitch = false
	$scope.age = 18;
	$scope.sex = 'F';
	$scope.location = 'NY'
	$scope.usernames = ['Tom123','xXx_bl0od_lvr_xXx','mmckenzie']
	$scope.pressStatus = "Unpressed"
	$scope.color = "red"
	$scope.changeText = function(){
		$scope.pressStatus = "Pressed"
	}
	$scope.displayInfo = function(){
		return "I was made by the controller"
	}

	$scope.locale = $location.absUrl()
})