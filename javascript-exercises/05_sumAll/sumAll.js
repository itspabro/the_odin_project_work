const sumAll = function(first, second) {
  // Check if parameters are positive integers
  //let values = [ first, second ];
  //values.forEach((param) => {
  //  if ( !Number.isInteger(param) ) {
  //    return 'ERROR'
  //  }
  //});

  // Check if parameters are integers
  if ( !Number.isInteger(first) || !Number.isInteger(second) ) {
    return "ERROR"
  }

  // Check if parameters are greater than zero
  if ( first < 0 || second < 0 ) {
    return "ERROR"
  }

  // In case the first number is bigger than the second
  if ( first > second ) {
    let third = second;
    second = first;
    first = third;
  };

  // Add integers
  let output = 0;
  for ( i = first; i < ( second + 1 ); i++ ) {
    output = output + i
  }

  return output
};

// Do not edit below this line
module.exports = sumAll;
