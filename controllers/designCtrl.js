app.controller('designCtrl', function($scope, $interval, $timeout, collectInfo,){
	$scope.inputFields=["Age","Sex","Height","Weight","BMI","O2 Sats","Systolic BP", "Diastolic BP" ]
	$scope.radioFields=["L Eye Vitrious Clear?","R Eye Vitrious Clear?", "L Ear Canal Clear?", "R Ear Canal Clear?"]
	$scope.aquInfo= function(feild,info){
		collectInfo.aquInfo(feild, info)
	}
	$scope.dispInfo=function(){
		return collectInfo.dispInfo()
	}
})