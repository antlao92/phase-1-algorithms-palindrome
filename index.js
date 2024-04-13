
  // Write your algorithm here

  /*function isPalindrome(word) {
    var re = /[^A-Za-z0-9]/g;
    word = word.toLowerCase().replace(re, '');
    var len = word.length;
    for (var i = 0; i < len/2; i++) {
      if (word[i] !== word[len - 1 - i]) {
          return false;
      }
    }
    return true;
   }
   */

   function isPalindrome(word) {
    var re = /[\W_]/g;
    var lowRegWord = word.toLowerCase().replace(re, '');
    var reverseWord = lowRegWord.split('').reverse().join(''); 
    return reverseWord === lowRegWord;
  }


/* 
  Add your pseudocode here
   
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
