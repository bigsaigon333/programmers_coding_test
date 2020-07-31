function solution(number, k) {
	let answer = "";
	let remained = number.length - k;
	let start = 0;

	while (remained > 0) {
		let max = Number(number[start]);
		for (let i = start + 1; i < number.length - remained + 1; i++) {
			if (Number(number[i]) === 9) {
				max = 9;
				break;
			}
			if (max < number[i]) {
				max = Number(number[i]);
			}
		}

		for (let j = start; j < number.length - remained + 1; j++) {
			if (Number(number[j]) === max) {
				answer += number[j];
				start = j + 1;
				remained--;
				break;
			}
		}
	}

	return answer;
}

console.log(solution((Math.pow(10, 10) - 1).toString(), 1));
