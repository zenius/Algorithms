/*factorial using loop*/
function factorial(n) {
  var result = 1;
 
  // Implement this function
  for(var index = n; index >=1; index--) { 
     result *= index; 
  }
  
  return result;
};


/*factorial using recursion*/
function factorial(n) {
  // base case: 
  if(n==0 || n==1) { return 1; } 
  
  // recursive case:
  return n * factorial(n-1); 
};


/*factorial using tail recursion*/
function factorial(n, result = 1) { 
  if(n==0 || n==1) { return res; } 

  // recursive case:
  return factorial(n-1, res * n); 
}
