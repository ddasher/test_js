// 'use strict';
for (let i = 5; i <= 10; i++) {
	console.log(i);
}

let num = 20;
while (num >= 10) {
	if (num === 13){
		break;
	}
	console.log(num);
	num--;
}

let num = 2
while (num <=16){
    if (num % 2 === 0) {
        num++;
        continue;
    } else {
        console.log(num);
}
num++;
}

for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}

let i = 2;

    while (i <= 16) {
        if (i % 2 === 0) {
            i++;
            continue;
        } else {
            console.log(i);
        }
        i++;
    }

    const arrayOfNumbers = [];

    for (let i = 5; i < 11; i++) {
        arrayOfNumbers[i - 5] = i;
    }

    console.log(arrayOfNumbers);
    return arrayOfNumbers;