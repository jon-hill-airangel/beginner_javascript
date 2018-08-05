var child = document.querySelector('.child');
var parent = document.querySelector('.parent');

child.addEventListener('click', showChild);
parent.addEventListener('click', showParent);

function showChild(e){
	e.stopPropagation();
	e.target.style.color = 'blue';
	console.log('i am green');
}

function showParent(){
	console.log('i am red');
}


// preventDefault() stops the default behaviour of an event. stopPropagation() stops and event bubbling up to the parent elements. 
// return false will do both of the above.