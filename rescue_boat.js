function solution(people, limit) {
	let answer = 0;

	people.sort((a, b) => a - b);
	console.log(people);

	while (people.length > 0) {
		let max = people.pop();
		let min = people[0] === undefined ? 0 : people[0];

		console.log("min", min);

		if (max + min <= limit) {
			people.shift();
			answer++;
		} else {
			answer++;
		}
	}

	return answer;
}

//answer is 3
// console.log(solution([70, 50, 80, 50], 100));

//answer is 3
// console.log(solution([70, 80, 50], 100));

//answer is 3
// console.log(solution([20, 20, 20, 60, 30, 40], 100));

//answer is 4
// console.log(solution([20, 25, 25, 40, 20, 79, 81], 100));

console.log(solution([40], 240));
