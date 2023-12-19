/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    let count=0

    let vowels=['a','e','i','o','u','A','E','I','O','U']

    let arr=str.split('');

    for(let i=0;i<arr.length;i++)
    {
      for(let j=0;j<vowels.length;j++)
      {
        if(arr[i]==vowels[j])
        count++
      }
    }

    return count;
}

module.exports = countVowels;