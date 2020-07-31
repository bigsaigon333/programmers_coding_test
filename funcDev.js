function solution(progresses, speeds) {
	var answer = [];
	const HUNDRED = 100;

	while (progresses.length > 0) {
		// console.log(progresses);

		for (let i = 0; i < progresses.length; i++) {
			progresses[i] += speeds[i];
		}

		if (progresses[0] >= HUNDRED) {
			let count = 0;
			while (progresses[count] >= HUNDRED) {
				count++;
			}
			answer.push(count);

			for (let i = 0; i < count; i++) {
				progresses.shift();
				speeds.shift();
			}
		}
	}

	return answer;
}
console.log(solution([93, 30, 55], [1, 30, 5]));
