const reverseString = function(string) {
  let output = '';

  for ( i = 0; i < string.length; i++ ) {
    output = output + string.charAt( string.length - 1 - i );
  }

  return output
};

// Do not edit below this line
module.exports = reverseString;
