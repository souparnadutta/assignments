/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  
  let ans=true;
  str1=str.toLowerCase().replace(/[ !,\.:;-?]/g,'')

  for(let i=0;i<str1.length/2;i++)
  {
    if(str1[i]!=str1[str1.length-1-i])
    {ans=false}
  }

  return ans;

}

module.exports = isPalindrome;
