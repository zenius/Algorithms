const isPalindrome = function(string) {
  const length = string.length;

  if (length < 2) {
    return true;
  }

  if (string.charAt(0) !== string.charAt(length - 1)) {
    return false;
  }

  const newString = string.substring(1, length - 1);

  return isPalindrome(newString);
}

console.log(isPalindrome("racecar")); // true 
console.log(isPalindrome("motor")); // false 
console.log(isPalindrome("rotor")); // true 
console.log(isPalindrome("foobar")); // false
console.log(isPalindrome("")); // true 
