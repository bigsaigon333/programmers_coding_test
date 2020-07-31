function solution(arrangement) {
	let answer = 0;
	console.log(arrangement.split(""));

	let arr = arrangement.split("");

	let first, second;
	let num = 0;
	first = arr.shift();
	while (first !== undefined || second !== undefined) {
		second = arr.shift();
		// console.log("first, second", first, second);

		if (first === "(" && second === ")") {
			answer += num;
			first = second;
			second = arr.shift();
		} else if (first === "(") {
			num++;
		} else if (first === ")") {
			num--;
			answer++;
		}
		first = second;
		// console.log("num, answer", num, answer);
	}

	return answer;
}

console.log(solution("()(((()())(())()))(())"));
