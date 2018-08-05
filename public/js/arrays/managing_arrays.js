var array = [1,2,3];
array[2] = 45;

array[3] = ' a new value';
array.push('new value in the array');
var end_value = array.pop();
var removed_first_value = array.shift();
array.unshift('add a new value to the start of the array');



var array2 = ['jon', 'francis', 'bob', 'roland', 'sheila'];
console.log(array2.indexOf('francis')); // equals 1
console.log(array2.indexOf('does not exist')); // equals -1

console.log(array2.splice(1)); // francis onwards
console.log(array2.splice(1, 4)); // francis to roland
// also removes the elements from the array

console.log(array2.slice(1)); // francis onwards
console.log(array2.slice(1, 4)); // francis to roland
// doesn't mutate original array ie original array will be left the same


var array3 = ['michael', 'marh', 'marcie', 'burt'];
var otherArray = ['fred', 'mary'];
var finalArray = array3.concat(otherArray);
console.log(finalArray); // adds otherArray elements onto end of array3

var joinedString = array3.join(); // joinedString is now michael,mark,marcie,burt
var joinedString = array3.join('/'); // joinedString is now michael/mark/marcie/burt

var array4 = [1,11,2,5,10];
var filtered = array4.filter(function(item){
	return item > 9;
});
console.log(filtered); // returns [11,10]

var array5 = ['ben', 'tarquin', 'ness', 'terry'];
var filtered2 = array5.filter(function(item){
	if(item !== 'tarquin'){
		return item;
	}
});

var array6 = [2,6,4,5];
var mapped = array6.map(function(item){
	return item + 4;
});
console.log(mapped); // logs [6,10,8,9];


array5.forEach(function(item){ // a foreach loop
	console.log('my name is ' + item);
});