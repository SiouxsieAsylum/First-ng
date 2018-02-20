app.controller('designCtrl', function($scope, $interval,$parse, $timeout, collectInfo,){
	$scope.inputFields=["Age","Sex","Height","Weight","BMI","O2 Sats","Systolic BP", "Diastolic BP" ]
	$scope.radioFields=["L Eye Vitrious Clear?","R Eye Vitrious Clear?", "L Ear Canal Clear?", "R Ear Canal Clear?"]
	$scope.inputCounter=0
	$scope.radioCounter=0
	$scope.hoverEdit=false
	$scope.buttonActivated=false
	$scope.setActive={
		'inputs': false,
		'inputsHidden':false,
		'radioHidden':false,
		'radio':false 
	}
	$scope.activeForm = null
	$scope.form = {}
	$scope.modalActive = false

	$scope.setActivityTrue=function(formname){
		$scope.setActive[formname] = true
		$scope.modalActive = true
		// how to get $scope.variable
		$scope.activeForm = $scope.$eval(formname)
		console.log($scope.activeForm.$name)
	}

	$scope.setActivityFalse=function(){
		$scope.setActive = {
			'inputs': false,
			'inputsHidden':false,
			'radioHidden':false,
			'radio':false 
		}

		$scope.hoverEdit = false
		$scope.modalActive = false
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