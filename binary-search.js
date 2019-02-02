// algorithms.js

binarySearch(array, targetValue) {
	let min = 0;
	let max = array.length - 1;
	let guess = Math.floor((min+max)/2);

	while(1) {
		if(max < min) { return -1; } // target not found  
		
		if(array[guess] === targetValue) { return guess; } // target found 
		else if(array[guess] < targetValue) { min =  guess + 1;}
		else { max = guess - 1; }

		guess = Math.floor((max+min)/2);
	}
};




