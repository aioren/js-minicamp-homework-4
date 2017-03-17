'use strict';

//Do not change any of the function names

function multiplyArguments() {
	var newTotal = 1;
  if (arguments.length === 0) {
		return 0;
	} else {
		for (var i = 0; i < arguments.length; i++) {
			newTotal *= arguments[i];
		}
	}
  return newTotal;
}

function invokeCallback(cb) {
	cb();
}

function sumArray(numbers, cb) {
	var sum = numbers.reduce(function(runningTotal, num) {
		return runningTotal += num;
	});
	cb(sum);
}

function forEach(arr, cb) {
	arr.forEach(function(element) {
		cb(element);
	});
}

function map(arr, cb) {
	var newArray = [];
	arr.map(function(i) {
		newArray.push(cb(i));
	});
	return newArray;
}

function getUserConstructor() {
	function User(options) {
		this.username = options.username;
		this.name = options.name;
		this.email = options.email;
		this.password = options.password;
	}
	User.prototype.sayHi = function () {
		return 'Hello, my name is ' + this.name;
	};
	return User;
}

function addPrototypeMethod(Constructor) {
	Constructor.prototype.sayHi = function () {
		return 'Hello World!';
	};
}

function addReverseString() {
	var reversed = '';
	String.prototype.reverse = function () {
		for (var i = 0; i < this.length; i++) {
			reversed = this[i] + reversed;
		}
		return reversed;
	};
}

function nFactorial(n) {
	if (n === 1) return 1;
	return n * nFactorial(n - 1);
}

function cacheFunction(cb) {
	var cache = {};
	return function checkCache(x) {
		if (!(x in cache)) {
				cache[x] = cb(x);
		}
		return cache[x];
};
	//Extra Credit
	//use closure to create a cache for the cb function
	//the function that you return should accept a single argument and invoke cb with that argument
	//when the function you return is invoked with an argument it should save that argument and its result
	//when the function you return is called again with an argument that it has seen before it should not call cb
	//but should instead directly returned the previous result
	//example:
	//cb -> function(x) { return x * x; }
	//if the function you return is invoked with 5 it would pass 5 to cb(5) and return 25
	//if the function you return is invoked again with 5 it will look on an object in the closure scope
	//and return 25 directly and will not invoke cb again
}


//Do not modify code below this line.
////--------------------------------

module.exports = {
	multiplyArguments: multiplyArguments,
	invokeCallback: invokeCallback,
	sumArray: sumArray,
	forEach: forEach,
	map: map,
	getUserConstructor: getUserConstructor,
	addPrototypeMethod: addPrototypeMethod,
	addReverseString: addReverseString,
	nFactorial: nFactorial,
	cacheFunction: cacheFunction
};
