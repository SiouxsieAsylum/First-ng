app.controller('designCtrl', function($scope, $interval, $timeout, collectInfo,){
	$scope.inputFields=["Age","Sex","Height","Weight","BMI","O2 Sats","Systolic BP", "Diastolic BP" ]
	$scope.radioFields=["L Eye Vitrious Clear?","R Eye Vitrious Clear?", "L Ear Canal Clear?", "R Ear Canal Clear?"]
	$scope.inputCounter=0
	$scope.radioCounter=0
	$scope.hoverEdit=false
	$scope.buttonActivated=false
	// $scope.setActive=false
	$scope.setActivityTrue=function(){
		$scope.setActive = true
	}
	$scope.setActivityFalse=function(){
		$scope.setActive = false
		$scope.hoverEdit = false
	}

	$scope.aquInfo= function(feild,info){
		collectInfo.aquInfo(feild, info);
	}
	$scope.dispInfo=function(){
		return collectInfo.dispInfo()
	}

	$scope.hoverIn = function(){
    	this.hoverEdit= true
    }

    // if ($scope.inputs.$valid){
    // 	$scope.buttonActivated=true
    // }
   

})