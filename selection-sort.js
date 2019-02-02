/*selection sort */

const swap = function(array, firstIndex, secondIndex) {
    let temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
};

const indexOfMinimum = function(array, startIndex) {
    let minValue = array[startIndex];
    let minIndex = startIndex;
    let arrayLength = array.length; 

    for(let index = minIndex + 1; index < arrayLength; index++) {
        if(array[index] < minValue) {
            minIndex = index;
            minValue = array[index];
        }
    } 
    return minIndex;
}; 

const selectionSort = function(array) {
  let length =  array.length; 
  for(let index = 0 ; index < length; index++) { 
    let minIndex = indexOfMinimum(array, index); 
    swap(array, index, minIndex); 
  }
  	return array;
};


