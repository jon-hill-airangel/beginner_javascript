setTimeout(function(){
	alert('2 seconds have passed');
}, 2000);
// timeouts


var whatever = setInterval(function(){
	console.log('logs this every 3 seconds');
}, 3000);

setTimeout(function(){
	clearInterval(whatever);
}, 3000); // stops whatever after 3 seconds