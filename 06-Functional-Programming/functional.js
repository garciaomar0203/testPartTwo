function doubler (aNum) {
	return aNum * 2;
}



function map (anArray, aFunc) {
	// performs func on ea. element of anArray
	// returns array w/ each transformed elem
	var outputArray = []; // store transformed elems...
	for (var i = 0; i < anArray.length; i++) {
		var currentElem = anArray[i];
		outputArray.push(aFunc(currentElem)); // operate on each elem with func.
	}
	return outputArray;
}

function filter (anArray, aFunc) {
	// create output array...
	var output = [];
	for (var i = 0; i < anArray.length; i++) {
		var currentElem = anArray[i];
		if (aFunc(currentElem)) { // if this evaluates as true...
			output.push(currentElem);
		}
	}
	return output;
}

function contains (collection, item) {
	// does collection contain item?
	// arrays are objects...
	for (var key in collection) {
		if (collection[key] === item) {
			return true;
		}
	}
	return false;
}

function countWords (sentence) {
	return sentence.split(' ').length;
}

function countWordsInReduce (currentVal, sentence) { // didn't pass currentVal initially...
	// NOTE: SINCE USED IN REDUCE, HAS TO BE A COMBINER; NEED TWO ARGS!
	return currentVal + countWords(sentence);
}

function reduce (collection, startVal, combinerFunc) {
	var currentValue = startVal;
	//var returnValue = 0;

	for (var i = 0; i < collection.length; i++) {
		var currentElem = collection[i];
		currentValue = combinerFunc(currentValue, currentElem)
	}
	return currentValue;
}

function sum (arr) { // THAT'S IT!  NICE WORK!  WROTE OWN CALLBACK FUNC.
	return reduce(arr, 0, function (a, b) { // instead of passing pre-written function, pass one u write.
		return a + b;
	});
}

function every (arr, func) {
	// MY INITIAL ATTEMPT - PASSED 3 OF 4 SPECS...
	// return reduce (arr, true, function (){
	// 	if (true && func()){
	// 		return true;
	// 	} else {
	// 		return false
	// 	}
	// });
	// rewrite...BELOW WORKS!  MY OWN REWRITE!
	return reduce (arr, true, function (a, b){
		if (a && func(b)) {
			return true;
		} else {
			return false;
		}
	});
	// OFFICIAL SOLN...SLIGHT REWRITE ON MY PART...
	/*
	var everyIterator = function (currentVal, nextVal) {
		return currentVal && func(nextVal);
	});

	return reduce (arr, true, everyIterator)
	*/
}

function any (arr, func) { // this works also!!  official soln. like above...
	return reduce (arr, false, function (a, b) {
		if (a || func(b)) {
			return true;
		} else {
			return false;
		}
	});
}




















