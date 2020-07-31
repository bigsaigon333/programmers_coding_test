function solution(name) {
	let answer = 0;

	let nums = name.split("").map((str) => {
		return Math.min(
			str.charCodeAt(0) - "A".charCodeAt(0),
			"Z".charCodeAt(0) - str.charCodeAt(0) + 1
		);
	});
	console.log(nums);

	const sum = () => nums.reduce((acc, curr) => (acc += curr), 0);
	if (sum === 0) return 0;

	let min_val = sum() + nums.length;
	const rec = (i, val, level) => {
		if (level === 0) {
			if (sum() === 0 && val < min_val) {
				min_val = val;
			}
			return;
		} else if (sum() === 0) {
			if (val < min_val) {
				min_val = val;
			}
			return;
		} else {
			i = (nums.length + i) % nums.length;
			let temp = nums[i];
			val += nums[i] + 1;
			nums[i] = 0;
			rec(i + 1, val, level - 1);
			rec(i - 1, val, level - 1);
			nums[i] = temp;
		}
	};

	let temp = nums[0];
	nums[0] = 0;
	rec(1, temp, nums.length);
	rec(-1, temp, nums.length);

	answer = min_val;

	return answer;
}

console.log(solution("JAN"));
