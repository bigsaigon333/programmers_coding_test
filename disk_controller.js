function solution(jobs) {
	let answer = 0;
	const N = jobs.length;

	//a[0]: req, a[1]: exec
	jobs.sort((a, b) => {
		if (a[0] === b[0]) return a[1] - b[1];
		else return a[0] - b[0];
	});

	let start = 0;
	let end = 0;
	let q1 = [];
	let q2 = [];

	while (jobs.length > 0) {
		q1 = jobs
			.filter((v, i) => v[0] <= end)
			.sort((a, b) => {
				if (a[1] === b[1]) return a[0] - b[0];
				else return a[1] - b[1];
			});
		q2 = jobs.filter((v, i) => v[0] > end).sort((a, b) => a[0] - b[0]);
		jobs = q1.concat(q2);

		console.log(jobs);

		let curr = jobs.shift();

		if (curr[0] > end) start = curr[0];
		else start = end;

		end = start + curr[1];

		answer += end - curr[0];

		console.log("start end", start, end);
	}

	answer = Math.floor(answer / N);

	return answer;
}
