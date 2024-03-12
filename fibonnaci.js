function isFibonacciNumber(number) {
	let a = 0;
	let b = 1;

	while (b <= number) {
		if (b === number) {
			return true;
		}

		const temp = b;
		b = a + b;
		a = temp;
	}

	return false;
}

const inputNumber = 13;
const belongsToFibonacci = isFibonacciNumber(inputNumber);

if (belongsToFibonacci) {
	console.log(`${inputNumber} belongs to the Fibonacci sequence.`);
} else {
	console.log(`${inputNumber} does not belong to the Fibonacci sequence.`);
}
