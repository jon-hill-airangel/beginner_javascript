var user = {
	name: 'Graham',
	surname: 'Charles',
	age: 99
}

console.log(user.prototype); // gets undefined. you cannot access prototypes like this
console.log(user.__proto__); // logs prototype. should only be used for testing and has no use in production

Object.prototype.scream = function(){
	console.log('ahhhhh');
};

user.scream(); // scream function is now part of the object prototype so user can access the scream object.
console.log(user.__proto__);


// constructor functions

function Users(){ // a constructor which will create 
	// prototype
}


var user2 = new Users();
console.log(user2);
console.log(typeof Users);

// this is the closest js gets to a php style class model. the Users object is allowed it's own prototype objects/functions which
// are outside of the local scopes of other user made prototypes.

Users.prototype.scream = function(){
	console.log('im screaming from within the Users prototype. its like im screaming from within a class object (Users), only its local to Users');
}

Users.scream();

//Function.Users.scream(); // is undefined as Users has it's own scope because we have used the constructor model

console.log(window);


// practical example

function FastCar(){
	this.seats = 2;
	this.available = function(){
		console.log(this.model + ' not available');
	}
}

// sets a blueprint like a class in php
var ford = new FastCar();
var chevy = new FastCar();

ford.color = 'red';
chevy.color = 'silver';

ford.available();


function yacht(keelType, length){
	this.keelType = keelType;
	this.rigType = 'Bermuda';
	this.length = length;
	this.colors = ['blue', 'green', 'white']
}

var myYacht = new myYacht('fin', '32');
delete myYacht.length; // the new way of deleting a object property

// if keelType in object delete
if('keelType' in myYacht){
	delete myYacht.keelType;
}

// looping through like a key value pair array
for(var key in myYacht){
	if(key == 'rigType'){
		console.log(myYacht[key]);
	}

	for(var i=0; i<myYacht.colors.length; i++){
		console.log(myYacht.colors[i]);
	}
}