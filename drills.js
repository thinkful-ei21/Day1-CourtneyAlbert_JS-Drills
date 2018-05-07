'use strict';

function whoAmI(name, age) {

	try {
		if (typeof name !== 'string') {
			throw new Error('Invalid name argument, please insert a string');
		}

		if (typeof age !== 'number') {
			throw new Error('Invalid age argument, please insert a number');
		}
	}
	catch(err) {
		console.error(err.message);
	}
	

    let yob = yearOfBirth(age);

    console.log("Hello my name is Courtney and I'm 25 years old");
    console.log(`I was born in ${yob}.`);

}

whoAmI('Steve', 'Albert');

function yearOfBirth(age) {
    try {
        if(age < 0) {
            throw new Error('Age cannot be negative');
        }
    }
    catch(err) {
        console.error('Arguments not valid');
      
    }

	return 2018 - age;
}