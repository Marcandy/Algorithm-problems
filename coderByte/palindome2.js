
// Have the function PalindromeTwo(str) take the str parameter being passed and return the string true if the parameter is a palindrome, (the string is the same forward as it is backward) otherwise return the string false. The parameter entered may have punctuation and symbols but they should not affect whether the string is in fact a palindrome. For example: "Anne, I vote more cars race Rome-to-Vienna" should return true.


// This challenge requires you to determine if a string is a palindrome. A palindrome is a string that is read the same forwards as it is backwards, for example "mom" or "eye." This challenge, as opposed to the easier palindrome challenge on Coderbyte, may contains punctuation and spaces which makes it slightly harder. To solve this challenge, we'll need to use some code that we wrote in a previous solution which required us to reverse a string. We'll also need to strip away all punctuation and spaces because we don't need these symbols when comparing the string with its backwards version

function PalindromeTwo(str) {

  // only match letters and numbers, ignore punctuation
  var arr = str.match(/[a-z0-9]+/gi);

  // join into a string
  var joined = arr.join('').toLowerCase();

  // check for palindrome
  return joined === joined.split('').reverse().join('');

}
