const removeFromArray = function(theArray, ...toRemove) {
//  Remove values from old array; fails "multiple of the same value test"
//  toRemove.forEach((value) => {
//    let index = theArray.indexOf(value);
//    if ( index !== -1 ) {
//      theArray.splice(index, 1);
//    }
//  });

// Add values to new array
  let outputArray = []

  theArray.forEach((value) => {
    if (!toRemove.includes(value)) {
      outputArray.push(value)
    }
  });

  return outputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
