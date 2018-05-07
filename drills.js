'use strict';

function whoAmI(name, age) {
    let yob = yearOfBirth(age);

    console.log("Hello my name is Courtney and I'm 25 years old");
    console.log(`I was born in ${yob}.`);

}

whoAmI('Steve', -5);

function yearOfBirth(age) {
    try {
        if(age < 0) {
            throw new Error('something');
        }
    }
    catch(err) {
        console.error(err.message);
        console.log('this should run');
    }

	return 2018 - age;
}