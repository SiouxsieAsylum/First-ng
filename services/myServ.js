/*
	Services are more jaascript objects and functions that are availabe to your angular appliction. $location is a built in one. 
	You build new services with app.service(name, (x) => { this.function() = x => {}})
	You use custom services inside filters with app.filter(name,[serviceName, serviceName => {}])
	Do not use arrow functions
*/

app.service('pigLatin', function(){
	this.convert = function(text) {
		return `${text.substring(1)} - ${text.substring(0,1)}ay`
	}
})