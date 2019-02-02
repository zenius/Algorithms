/*factorial using loop*/
var factorial = function(n) {
  var result = 1;
  // Implement this function
  for(var index = n; index >=1; index--) { 
     result *= index; 
  }

  return result;
};


/*factorial using recursion*/
var factorial = function(n) {
  // base case: 
  if(n==0 || n==1) { return 1; } 
  
  // recursive case:
  return n * factorial(n-1); 
};