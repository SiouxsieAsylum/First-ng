
app.service('collectInfo', function(){
	infoObj = {}

	const aquInfo = function(x,y){
		infoObj[x] = y
	}

	const dispInfo = function(){
		return infoObj
	}

	return {
		aquInfo,
		dispInfo
	}
})