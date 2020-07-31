function solution(number, k) {
	let answer = "";

	console.log(number);
	console.log(number.length);

	const recursion = (start, r) => {
		console.log("");
		console.log("start", start);
		console.log("r", r);
		console.log("str", answer);
		console.log("");

		if (r === 0) {
			return;
		} else {
			let max = Math.max(...number.slice(start, number.length - r + 1));
			console.log("max", max);

			for (let i = start; i < number.length - r + 1; i++) {
				if (Number(number[i]) === max) {
					answer += number[i];
					recursion(i + 1, r - 1);
					break;
				}
			}
		}
	};

	//recursion(0, number.length - k);

	return answer;
}

console.log(solution("", 999999));
