const palindromes = function (input) {
  // remove punctuation, set all lower case
  const processed = input.replace(/[^\w]/g, '').toLowerCase();
  console.log(processed);

  let isPalindrome = true;
  // loop through each character, compare to "opposite" side
  for ( i = 0; i < processed.length; i++ ) {
    if ( !( processed.charAt(i) === processed.charAt( processed.length - i - 1 ) ) ) {
      isPalindrome = false;
    };
  };

  return isPalindrome;
};

// Do not edit below this line
module.exports = palindromes;
