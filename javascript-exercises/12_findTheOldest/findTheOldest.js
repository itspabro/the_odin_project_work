const findTheOldest = function(people) {
  
  // to keep from affecting the original people, make a new people
  //const almostPeople = structuredClone(people);
  //const almostPeople = people.map( (person) => {
  //  return {...person}
  //});
  const almostPeople = people.map( (person) => {
    return Object.assign({}, person);
  });

  // check if missing yearOfDeath; if missing, set as current year
  const newPeople = almostPeople.map( (person) => {
    if ( !person.yearOfDeath ) {
      const currentYear = new Date().getFullYear();
      person.yearOfDeath = currentYear;
    }
    return person;
  });
  console.log(people)

  // user sort() to sort people by years lived
  const orderedPeople = newPeople.sort( ( a, b ) => {
    const aAge = a.yearOfDeath - a.yearOfBirth;
    const bAge = b.yearOfDeath - b.yearOfBirth;
    return aAge > bAge ? -1 : 1;
  });

  // return first person in sorted object
  return orderedPeople[0];
};

// Do not edit below this line
module.exports = findTheOldest;
