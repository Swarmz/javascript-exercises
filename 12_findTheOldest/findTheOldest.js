const findTheOldest = function(people) {
    const dateYear = new Date().getFullYear();
    function addYearOfDeath(people) { // If yearofDeath key doesn't exist, add it and assign current year as value
        if (!("yearOfDeath" in people) == true) { 
            people.yearOfDeath = dateYear;
        }
    }
    people.forEach(addYearOfDeath);
    const oldestPerson = people.sort(function(a, b) {
        const lastPerson = a.yearOfDeath - a.yearOfBirth;
        const nextPerson = b.yearOfDeath - b.yearOfBirth;
        return lastPerson > nextPerson ? -1 : 1;
    });
    return oldestPerson[0];
};

// Do not edit below this line
module.exports = findTheOldest;
