function solution(citations) {
	let answer = 0;
	citations.sort((a, b) => b - a);
	console.log(citations);

	for (let max = citations[0]; max >= 0; max--) {
		let num = citations.filter((value) => value >= max).length;
		console.log("max", max);
		console.log("num", num);

		if (num >= max) {
			answer = max;
			break;
		}
	}
	return answer;
}

console.log(solution([6, 5, 6, 3, 0, 3, 6, 1, 5]));
