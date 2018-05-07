'use strict';

function decode(phrase) {
    // breakup prhase into each word
    let array1 = phrase.split(' ');
    console.log(array1);

    // loop thru each word and return a letter for each, based on the code table
    let array2 = [];

    array1.forEach(each => {
        if(each[0] === 'a') {
            array2.push(each[1]);
        }
        else if(each[0] === 'b') {
            array2.push(each[2]);
        }
        else if(each[0] === 'c') {
            array2.push(each[3]);
        }
        else if(each[0] === 'd') {
            array2.push(each[4]);
        }
        else array2.push(' ');
    });

    // return the end result, which is the secret code
    let result = array2.join('');
    return result;
    console.log(array2);
}

decode('craft block argon meter bells brown croon droop');