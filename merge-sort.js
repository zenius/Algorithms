/*merge sort*/

// Takes in an array that has two sorted subarrays,
//  from [p..q] and [q+1..r], and merges the array

const merge = function(array, p, q, r) {
    let lowHalf = [], highHalf = [];
    let k = p, i, j;

    for (i = 0; k <= q; i++, k++) {
        lowHalf[i] = array[k];
    }
    for (j = 0; k <= r; j++, k++) {
        highHalf[j] = array[k];
    }

    k = p, i = 0, j = 0;
    
    // Repeatedly compare the lowest untaken element in
    //  lowHalf with the lowest untaken element in highHalf
    //  and copy the lower of the two back into array
   const lowHalfLength = lowHalf.length;
   const highHalfLength = highHalf.length; 

    while(i < lowHalfLength && j < highHalfLength) {
      if(lowHalf[i] <= highHalf[j]) { 
          array[k] = lowHalf[i]; 
          i++; 
      } else if(lowHalf[i] > highHalf[j]) { 
          array[k] = highHalf[j]; 
          j++; 
      }
      k++; 
    }
    
    // Once one of lowHalf and highHalf has been fully copied
    //  back into array, copy the remaining elements from the
    //  other temporary array back into the array
    while(i < lowHalfLength) { 
      array[k] = lowHalf[i]; 
      i++;
      k++; 
    }

    while(j < highHalfLength) { 
      array[k] = highHalf[j]; 
      j++;
      k++; 
    }
};


// Takes in an array and recursively merge sorts it
const mergeSort = function(array, start, end) {
  if( start < end) {
     let mid = Math.floor((start + end) / 2);
     mergeSort(array, start, mid);
     mergeSort(array, mid + 1, end); 
     merge(array, start , mid, end); 
  }

  return array; 
};

let array = [4,5,2,-1,0,6,-99]; 
console.log(mergeSort(array,0,array.length-1)); 