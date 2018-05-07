function daysInMonth(month, leapYr) {


	try {
		if (month !== 'January' || month !== 'February' || month !== 'March' || month !== 'April' ||
			month !== 'May' || month !== 'June' || month !== 'July' || month !== 'August' ||
			month !== 'September' || month !== 'October' || month !== 'November' || 
			month !== 'December') {

			throw new Error('Must provide a valid month.');
		}		
	}
	catch(err) {
		console.error(err.message);
		return;
	}



	let days = 0;


	switch (month) {
		case 'January':

			days = 31;
			break;

		case 'February':

			if (leapYr === true) {
				days = 29;
			}
			else {
				days = 28;
			}
			break;

		case 'March':

			days = 31;
			break;

		case 'April':

			days = 30;
			break;

		case 'May':

			days = 31;
			break;

		case 'June':

			days = 30;
			break;

		case 'July':

			days = 31;
			break;

		case 'August':

			days = 31;
			break;

		case 'September':

			days = 30;
			break;

		case 'October':

			days = 31;
			break;

		case 'November':

			days = 30;
			break;

		case 'December':

			days = 31;
			break;
	}

	return `${month} has ${days} days`;
}

console.log(daysInMonth('Februmary', false));










