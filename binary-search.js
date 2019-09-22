// Method I 

function binarySearch(array, targetValue) {
	let min = 0;
	let max = array.length - 1;
	let guess = Math.floor((min+max)/2);

	while(1) {
		if(max < min) { return -1; } // target not found  
		
		if(array[guess] === targetValue) { 
      // target found 
      return guess; 
    } 
		else if(array[guess] < targetValue) { 
      min =  guess + 1;
    }
		else { 
      max = guess - 1; 
    }
		guess = Math.floor((max + min)/2);
	}
};

// Method 2
function binarySearch(array, targetValue) {
	let min = 0;
	let max = array.length - 1;
	let guess = Math.floor((min+max)/2);

	while(min <= max) {
		if(array[guess] === targetValue) { 
      // target found 
      return guess; 
    }
		else if(array[guess] < targetValue) { 
      min =  guess + 1;
    }
		else { 
      max = guess - 1; 
    }
		guess = Math.floor((max + min)/2);
	}
 
	// target not found
  return -1; 
};
