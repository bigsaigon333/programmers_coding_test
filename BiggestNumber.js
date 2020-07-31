function solution(numbers) {
	let answer = "";

	let numStrings = numbers.map((num) => num.toString());

	console.log("before", numStrings);
	numStrings.sort(
		(str1, str2) => Number(str2.concat(str1)) - Number(str1.concat(str2))
	);
	console.log("after", numStrings);

	answer = numStrings.join("");

	if (Number(answer) === 0) {
		answer = "0";
	}

	return answer;
}

console.log(solution([9, 0, 9, 0]));
