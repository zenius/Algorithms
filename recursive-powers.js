/*computing powers of number, where power is positive number*/

const power = function(x, n) {
  // base case
  if(n === 0) { 
    return 1; 
  }
  
  // recursive case: n is negative 
 if(n < 0) { 
   return 1/power(x, -n); 
 }
  // recursive case: n is odd
  if( n%2 === 1) { 
    return x*power(x, n-1); 
  }
  // recursive case: n is even
  if( n%2 === 0) { 
    return power(x,n/2)*power(x,n/2); 
  }
};

console.log(power(2,-2)); // 0.25
console.log(power(2,2)); // 4
