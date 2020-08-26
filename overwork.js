function solution(n, works) {
	var answer = 0;

	const sum = works.reduce((acc, curr) => (acc += curr), 0);
	if (sum <= n) return 0;

	works.sort((a, b) => b - a);

	const getMin = (behind) => {
		for (let i = behind + 1; i < works.length; i++) {
			if (works[behind] > works[i]) return i;
		}
		return works.length - 1;
	};

	let i = 0;
	let min = -1;
	while (n > 0) {
		min = getMin(i);
		console.log(min, works[min]);

		for (let j = 0; j < min && n > 0; j++) {
			if (n > 0 && works[j] >= works[min]) {
				works[i]--;
				n--;
			}
			// if (works[i] < works[i + 1])
			// 	[works[i], works[i + 1]] = [works[i + 1], works[i]];
			works.sort((a, b) => b - a);
		}
		console.log(works);
	}

	// console.log(works);

	return works.reduce((acc, curr) => (acc += curr ** 2), 0);
}

console.log(solution(4, [4, 3, 3]));
// console.log(solution(6, [10, 8, 5, 2]));
// console.log(solution(1, [1, 1, 1, 1, 1, 1]));
