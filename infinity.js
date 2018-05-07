function beyond(num) {

//num = Infinite --> 'and beyond'
	if (num === Infinity) {
		console.log('And beyond!');
	}

//num = finite & positive --> 'to infinity'
	else if (num > 0 && num < Infinity) {
		console.log('To infinity');
	}

//num = finite & negative --> 'to negative infinity'
	else if (num < 0 && num > -Infinity) {
		console.log('To negative infinity');
	}

//num = 0 --> 'staying home'
	else {
		console.log('Staying home');
	}

}

beyond(0);