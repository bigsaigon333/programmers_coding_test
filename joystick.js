function solution(name) {
	let answer = 0;

	let nums = name.split("").map((str) => {
		return Math.min(
			str.charCodeAt(0) - "A".charCodeAt(0),
			"Z".charCodeAt(0) - str.charCodeAt(0) + 1
		);
	});

	let sum = nums.reduce((acc, curr) => (acc += curr), 0);
	if (sum === 0) return 0;

	console.log(nums);

	let zero_length = 0;
	let zero_start = 0;
	let zero_end = -1;
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === 0) {
			let length;
			let start;
			let end;
			for (let j = 0; j < nums.length; j++) {
				let k = (nums.length + i + j) % nums.length;
				console.log("k", k);
				if (nums[k] !== 0) {
					length = j;
					start = i;
					end = (nums.length + k - 1) % nums.length;
					break;
				}
			}

			if (length >= zero_length) {
				zero_length = length;
				zero_start = start;
				zero_end = end;
			}
		}
	}

	console.log(
		"zero_length zero_start zero_end",
		zero_length,
		zero_start,
		zero_end
	);

	let num_end = (zero_start - 1 + nums.length) % nums.length;
	let num_start = (zero_end + 1 + nums.length) % nums.length;

	console.log("num_start num_end", num_start, num_end);

	const getDistance = (a, b) =>
		Math.min(Math.abs(a - b), Math.abs(nums.length - (a - b)));

	let nums_length = nums.length - zero_length - 1;

	answer =
		nums_length +
		Math.min(getDistance(num_start, 0), getDistance(num_end, 0)) +
		sum;

	return answer;
}

console.log(solution("BBAABAA"));
