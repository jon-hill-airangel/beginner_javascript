// closures

function multiply(value){
	var total = value;
	return function(){
		return total * 2;
	}
}

var getResult(multiply(20));
var getResult2(multiply(40));

console.log(getResult());
console.log(getResult2());
// functions can be assigned to a variable and that variable can then beb called as a function.

