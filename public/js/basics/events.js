var click_me_to_change_colour = document.querySelector('#click_me_to_change_colour ');

click_me_to_change_colour.onclick = function(e){
	e.target.style.color = 'red';
}

click_me_to_change_colour.onmouseover = function(e){
	e.target.style.color = 'green';
}

click_me_to_change_colour.ondblclick = function(e){
	e.target.style.color = 'purple';
}

function click1(){
	console.log('do something');
}

function click2(){
	console.log('do something else');
}

click_me_to_change_colour.addEventListener('click', click1);
click_me_to_change_colour.addEventListener('click', click2);

click_me_to_change_colour.removeEventListener('click', click1);

document.addEventListener('click', show_modal_popup);

function show_modal_popup(){
	alert('ha ha ha');
}