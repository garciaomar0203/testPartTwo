function factorialIterative (aNum) {
	// I WAS SLIGHTLY CLOSE...
	// var output = 0;
	// for (var i = aNum - 1; i > 0; i--) {
	// 	output *= aNum * i;
	// }
	// return output;
	var total = 1;
	for (aNum; aNum >= 2; aNum--) {
		total *= aNum;
	}
	return total;
}


function factorial (aNum) { // I have an easier time writing the recursive version of this...
	if (aNum === 0) {
		return 1;
	} else {
		return aNum * factorial(aNum - 1);
	}
}

function fib (aNum) { // this is correct.  Watch on call stack!
	if (aNum === 1 || aNum === 0) {
		return 1;
	} else {
		debugger;
		return fib(aNum - 1) + fib(aNum - 2);
	}
}

function type (aThing) {

	var output = Object.prototype.toString.call(aThing);
	return output.slice(8, -1); // first part of 'output' is always '[object ', or to 8th index (w ' ')
	// rationale for above...
}

function stringify (aThing) {
	// My original direction...looking cursorily at soln (not how to handle arrays...)
	// if (type(aThing) !== 'Object' && type(aThing) !== 'Array') {
	// 	return type(aThing);
	// } ... here is part of code...
	if (type(aThing) === 'String') {
		return '"' + aThing + '"';
	}

	if (type(aThing) === 'Array') {
		// MY ORIGINAL TACK...
		// for (var i = 0; i < aThing.length; i++) {
		// 	var currentElem = aThing[i];
		// 	if (!Array.isArray(currentElem)){
		// 		return stringify(currentElem);
		// 	} else {
		// 		return stringify(aThing.slice(currentElem));
		// 	}
		// } soln below...
		var result = aThing.map(function(arg){
			return stringify(arg);
		});

		return '[' + result.join(',') + ']';
	}

	if (type(aThing) === 'Object') {
		// use 'Object.keys'; solution also uses 'forEach()''
		// MY SOLN - HAS ISSUES.
		// var keysArray = Object.keys(aThing);
		// var output = keysArray.forEach(function(elem){
		// 	return stringify(aThing[elem]); // SOLN: 'stringify(aThing[key])'
		// });
		// return output;//'{' + output.join(',') + '}';
		// OFFICIAL SOLN:
		var result = [];
		Object.keys(aThing).forEach(function (key){
			var val = stringify(aThing[key]);
			result.push('"' + key +'": ' + val);
		});
		return "{" + result.join(',') + "}";
	}
		
	
		return aThing + "";
	
	// how to convert to obj?  FIX AND YOU'RE IN!
}



















