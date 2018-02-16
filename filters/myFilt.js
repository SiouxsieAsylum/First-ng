// you can also write your own filter with app.filter(name, function(){}) 
// Do not use arrow functions

app.filter('myFilter',['pigLatin', function(pigLatin) {
	return function(text) {
	 	return pigLatin.convert(text) 
	}
}]) 
