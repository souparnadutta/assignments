/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {

  if(str1.length!=str2.length)
  return false;

  str1 = str1.replace(' ', '').toLowerCase();
  str2 = str2.replace(' ', '').toLowerCase();


  let ans=true;

  arr1=str1.split('');
  arr2=str2.split('');

  arr1.sort();
  arr2.sort();
  

  for(let i=0;i<str1.length;i++)
  {
    if(arr1[i]!=arr2[i])
    {
      ans=false;
      return ans;
    }
  }
  
  return ans;
}

module.exports = isAnagram;
