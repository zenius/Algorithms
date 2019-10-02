// Note: Here,range of numbers is: 0 to 99

const countingSort = function(array) {
  const length = array.length;
  let countArray = Array(100).fill(0);

  for (let i = 0; i < length; i++) {
    countArray[array[i]]++;
  }

  // running countArray sum 
  for (let i = 1; i < 100; i++) {
    countArray[i] += countArray[i - 1];
  }

  let result = Array(length).fill(0);

  for (let i = length - 1; i >= 0; i--) {
    let index = array[i];
    let indexCount = --countArray[index];
    result[indexCount] = index;
  }

  return result;
}

console.log(countingSort([19, 10, 12, 10, 24, 25, 22])); // [10, 10, 12, 19, 22, 24, 25] 
