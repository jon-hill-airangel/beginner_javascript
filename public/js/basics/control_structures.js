var tester = 5;
if(tester === 5){
	// dee something like
} else if(tester === 4){
	// dee something else
} else {
	// dee something else .........	
}

tester = 3;
var cock;
switch(tester){
	case 5:
		cock = 'balls';
		break;
	case 4:
		cock = 'fanny';
		break;
	default:
		cock = 'tits';
}

console.log(cock);


for(var i=0; i<=5; i++){
	console.log(i);
	if(i == 2){
		break;
	}
}

for(var i=0; i<=5; i++){
	console.log(i);
	if(i == 2){
		continue;
	}
}

var array = ['brian', 'jemima', 'jordan'];
for(var i=0; i<array.length; i++){
	console.log(array[i]);
}

var value = 11;
while(value <= 20){
	console.log(++value);
}

var logged = 0;
var run = true;
while(run == true){
	console.log(logged++);
	if(logged === 3){
		run = false;
	}
}