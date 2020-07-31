function solution(numbers) {
	let answer = 0;
	let queue = [""];
	let everycase = [];

	for (let i = 0; i < numbers.length; i++) {
		let qLen = queue.length;
		for (let j = 0; j < qLen; j++) {
			queue.push(queue[j] + numbers[i]);
		}
	}
	// console.log("queue", queue);
	queue = [...new Set(queue)];
	// console.log("Duplications Removed: ", queue);

	const permutation = (start, end, str) => {
		if (start === end) {
			everycase.push(Number(str));
			// console.log("str", str);
		} else {
			for (let i = start; i <= end; i++) {
				let swappedStr =
					start === i
						? str
						: str.slice(0, start) +
						  str[i] +
						  str.slice(start + 1, i) +
						  str[start] +
						  str.slice(i + 1);

				permutation(start + 1, end, swappedStr);
			}
		}
	};

	queue.forEach((value, index) => {
		permutation(0, value.length - 1, value);
	});

	everycase = [...new Set(everycase)];
	everycase.sort((a, b) => a - b);
	// console.log("everycase: ", everycase);

	let PRIME_NUMBERS = [false, false];
	const MAX_NUMBER = Math.pow(10, numbers.length);

	for (let i = 2; i < MAX_NUMBER; i++) {
		PRIME_NUMBERS[i] = true;
	}

	for (let i = 2; i < Math.sqrt(MAX_NUMBER); i++) {
		for (let j = i * 2; j < MAX_NUMBER; j += i) {
			PRIME_NUMBERS[j] = false;
		}
	}
	// console.log(PRIME_NUMBERS);

	everycase.forEach((value) => {
		if (PRIME_NUMBERS[value] === true) {
			answer++;
		}
	});

	return answer;
}

console.log(solution("1011"));
