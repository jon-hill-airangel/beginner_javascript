var ref = 'one';
var focus = ref;

// null means defined but null
// undefined means undefined
ref = 'two';
// passed by reference not by value.
console.log(focus);



var movies = ['star wars', 'tron', 'godfather'];
console.log(movies[1].length);
var tits = undefined;
console.log(tits);
var not_a_number = 'clearly a string';
console.log(not_a_number * 12);
console.log(isNaN(not_a_number * 12));
// NaN - not a number


var user = {
	name: 'James',
	lastname: 'Bond'
}

console.log(user);