const Algo = require("../algo");

describe("Algo", () => {
  describe("reverse", () => {
    // TODO: Write a test for the `reverse` method that should take a string as an argument and return a new reversed version of the string
    it ('should return a new reversed version of the string when called with a "new" keyword' , () => {
      const str = "Hello WOrld";
      const reversed = "!dlroW olleH";
      const result = new Algo().reversed(str)
    

    expect (result).toEqual(reversed)
     } )
  
  });

  describe("isPalindrome", () => {
    // TODO: Write a test for the `isPalindrome` method that should take a string as an argument and return the boolean `true` if the provided string is a palindrome.
    it ('should return the boolean "true" if the given "string" is a palindrome' , () => {
      const result = new Algo().isPalindrome(str)
      const str = "racecar"

    expect (result).toEqual(true)
     } )
  });

  describe("capitalize", () => {
    // TODO: Write a test for the `capitalize` method that should take a string as an argument and return a new string with the first letter of each word capitalized
  });
});
