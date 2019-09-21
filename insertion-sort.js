/*Challenge: Insert a Value Before an Index in Sorted Order*/

var insert = function(array, rightIndex, value) {
  var length = array.length; 
  var positionToInsert = rightIndex + 1; 
  for(var index = rightIndex ; index >= 0 && array[index] > value; index--) { 
     // array[index] <= value is equivaluent to : array[index] > value 
     if(array[index] <= value) { break;} 
      positionToInsert = index; 
      array[index+1] = array[index];
  }
  array[positionToInsert] = value; 
};


var insertionSort = function(array) {
  var length = array.length; 
  for(var index = 1 ; index < length; index++) { 
  	// remember to adjust the edge case 
  	// hence, index starts with 1
        insert(array, index-1, array[index]) 
  }
};
