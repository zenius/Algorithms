
/* quick sort */

// Swaps two items in an array, changing the original array
var swap = function(array, firstIndex, secondIndex) {
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
};

var partition = function(array, start, end) { 
    var partitionIndex = start; 
    var pivot = array[end];  
    for (var index = start; index < end; index++) { 
      if(array[index] <= pivot) { 
        swap(array, index, partitionIndex); 
        partitionIndex++; 
      }
    }
    swap(array, partitionIndex, end); 
    return partitionIndex; 
};

var quickSort = function(array, start, end) {  
  if(start < end) { 
    var partitionIndex =  partition(array, start, end); 
    quickSort(array, start, partitionIndex - 1); 
    quickSort(array, partitionIndex + 1, end); 
  }
  return array; 
};

var array = [9,7,5,11,12,2,14,3,10,4,6]; 
console.log(quickSort(array,0, array.length-1)); 
