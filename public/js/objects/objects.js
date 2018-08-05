var user = {
	first_name: 'bob',
	surname: 'jones',
	age: 15,
	cars: ['honda', 'chevrolet'],
	salute: function(){
		console.log('howdi there, my name is ' + this.first_name);
	}
};

console.log(user.cars);
console.log(user.salute());

var user2 = new Object();
user2.first_name = 'jessie';
user2.surname = 'wilkinson';
user2.addUser = function(name, surname){
	var user = new Object();
	user.first_name = name;
	user.surname = surname;
};


console.log(this); // logs window