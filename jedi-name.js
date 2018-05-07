'use strict';

function jediName(firstName, lastName) {
    // get first 3 letters of last name
    let part1 = lastName.slice(0,3);

    // get first 2 letters of first name
    let part2 = firstName.slice(0,2);

    // combine and return jedi name
    return part1 + part2;
}

console.log(jediName('Courtney', 'Albert'));