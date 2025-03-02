const fibonacci = function(input) {
  // Change possible strings to int
  let index = Number(input);

  // return "OOPS" when input a negative number
  if ( index < 0 ) { return "OOPS" };
  // return 0 if input is 0; zeroeth position in fibonacci is zero
  if ( index == 0 ) { return 0 };
  // return 1 if input is 1; can't get my for loop to work with 1.
  if ( index == 1 ) { return 1 };

  // create var to calculate current fibonacci number
  let zero = 0;
  // create var to hold previous number, set to first index
  let one = 1;
  // create var to hold previous previous number, set to zeroeth index
  let two = 0;

  // loop through fibonacci sequence to index
  for ( i = 1; i < index; i++ ) {
    zero = one + two;
    two = one;
    one = zero;
  };

  // return zero or one
  return zero;
};

// Do not edit below this line
module.exports = fibonacci;
