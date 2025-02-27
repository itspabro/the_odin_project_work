const add = function(first, second) {
  return first + second
};

const subtract = function(first, second) {
  return first - second
};

const sum = function(...num) {
  console.log(num)
  let newNum
  let output = 0
  let shouldFail = false

  newNum = num.flat(Infinity)

  console.log(newNum)

  newNum.forEach( (value) => {
    if ( !Number.isInteger(value) ) {
      shouldFail = true;
      return;
    }

    output = output + Number(value)
  })

  console.log(output)

  if ( shouldFail ) {
    return "ERROR"
  }

  return output
};

const multiply = function(nums) {
  let output = 1

  nums.forEach( (value) => {
    output = output * value
  });

  return output
};

const power = function(base, exponent) {
  return base ** exponent
};

const factorial = function(integer) {
  let output = integer

  if ( integer === 0 ) {
    output = 1
  }

  for ( i = integer; i > 1; i-- ) {
    output = output * ( i - 1 )
  }

  return output
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
