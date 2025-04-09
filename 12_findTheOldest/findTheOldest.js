const findTheOldest = function() {

};



// Reduce method

function oldest(persons) {
    return persons.reduce((oldestPerson, currentPerson) => {
        if (!oldestPerson) return currentPerson; // For the first iteration
        const currentAge = currentPerson.yearOfDeath - currentPerson.yearOfBirth;
        const oldestAge = oldestPerson.yearOfDeath - oldestPerson.yearOfBirth;
        
        return currentAge > oldestAge ? currentPerson : oldestPerson;
    }, null); // Explicitly start with null
}

// Sort method

function oldest(persons) {
    const sortedPersons = persons.sort((a, b) => {
        const ageA = a.yearOfDeath - a.yearOfBirth;
        const ageB = b.yearOfDeath - b.yearOfBirth;
        
        return ageB - ageA; // Sort in descending order of age
    });
    return sortedPersons[0]; // The first person in the sorted array is the oldest
}

//Map and find method

function oldest(persons) {
    const ages = persons.map(person => person.yearOfDeath - person.yearOfBirth);
    const maxAge = Math.max(...ages);
    return persons.find(person => (person.yearOfDeath - person.yearOfBirth) === maxAge);
}


// Do not edit below this line
module.exports = findTheOldest;
