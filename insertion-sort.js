/*Challenge: Insert a Value Before an Index in Sorted Order*/

const insert = function(array, index) {
  let value = array[index];
  let j = index - 1; 

  while(j >= 0 && value < array[j]) {
    // right shift operation
    array[j + 1] = array[j]; 
    j--; 
  }
  array[j + 1] = value; 
}

const insertionSort = function(array) {
  const length = array.length; 

  for (let rightIndex = 1; rightIndex < length; rightIndex++) { 
    insert(array, rightIndex); 
  }
  return array; 
}
