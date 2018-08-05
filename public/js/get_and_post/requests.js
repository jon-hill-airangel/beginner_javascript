// a good resource for buildoing apis is https://jsonplaceholder.typicode.com/ which will provide tailored dummy json data for free by 
// calling a dummy api.

var http = new XMLHttpRequest();
var url = 'https://jsonplaceholder.typicode.com/posts';
var method = 'GET';

http.open(method, url);
http.send();

var acceptable_response_codes = [200,201,202];

http.onreadystatechange = function () {
	if(http.readyState === XMLHttpRequest.DONE && (acceptable_response_codes.indexOf(http.status) !== -1)){
		console.log(JSON.parse(http.response));
	} else {
		console.log('it did not work');
	}
};




var http = new XMLHttpRequest();
var url = 'https://jsonplaceholder.typicode.com/posts';
var method = 'POST';
var db = JSON.stringify({name: 'Jules', message: 'I dare you i double dare you you bitch'});

http.open(method, url);
http.setRequestHeader("Content-Type", "application/json");

http.onreadystatechange = function () {
	if(http.readyState === XMLHttpRequest.DONE && (acceptable_response_codes.indexOf(http.status) !== -1)){
		console.log(JSON.parse(http.response));
	} else {
		console.log('it did not work');
	}
};
