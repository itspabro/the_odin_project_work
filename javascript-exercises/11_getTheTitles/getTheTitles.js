const getTheTitles = function(input) {
  // use map, not filter...
  return input.map( (book) => book.title );
};

// Do not edit below this line
module.exports = getTheTitles;
