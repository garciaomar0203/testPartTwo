
function interleave (strings) {
	var output = '';
	// push each string in to an array
	// iterate over the array, nested for loops?
	// possibly use reduce to combine?
	// place each argument passed in 'strings' as its own elem in array
	var stringsArray = Array.prototype.slice.call(arguments);
	
	// not sure I can implement this effectively
	// return stringsArray.reduce(function(){
		// write combiner function; probably use recursion...
		// such that new string is formed by incrementally cropping off the first char left in each after slicing
	// });
	// use array.shift()?

	// var output = ''; // empty string to store output;
	for (var i = 0; i < stringsArray.length; i++) {
		var currentString = stringsArray[i];
		output += currentString[0]; // + interleave(currentString.slice(1)) ??
	}
	return output;

	}
	

	// for (var j = 0; j < currentString.length; j++) {
	// 	var currentChar = currentString[j];
	// 	output += currentChar;
	// }