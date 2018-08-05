var number = 5;

(function showName(value){
	var number = value + 5;
	// number = value + 5 - this will invoke the global var
	console.log(number);
})(number); // we want to trigger the function after it is loaded.

console.log(number);


// console will show 10 and then 5. number inside closure is insulated from the global scope. this is one reason this
// would show 10 then 10 if global var was used in closure
// technique is used to enclose variable scope. Any time you want to ensure the scope of a section of code is self-contained, this technique
// can be used.