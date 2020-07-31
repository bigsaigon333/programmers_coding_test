function solution(name) {
	let answer = 0;

	let nums = name.split("").map((str) => {
		return Math.min(
			str.charCodeAt(0) - "A".charCodeAt(0),
			"Z".charCodeAt(0) - str.charCodeAt(0) + 1
		);
	});
	console.log(nums);
	let current = 0;
	answer = nums[0];
	nums[0] = 0;

	while (nums.reduce((acc, curr) => (acc += curr), 0) > 0) {
		let forward = (current + 1) % nums.length;
		let backward = (nums.length + current - 1) % nums.length;
		console.log("current: ", current);

		while (nums[forward % nums.length] === 0) {
			forward = (forward + 1) % nums.length;
		}
		while (nums[backward % nums.length] === 0) {
			backward = (nums.length + backward - 1) % nums.length;
		}
		// console.log("(forward, backward)", forward, backward);

		const getDistance = (array, current, next) => {
			let distance = Math.abs(current - next);

			return Math.min(distance, array.length - distance);
		};

		const getTotalDistance = (arr, nextIndex) => {
			let movedArr = arr.map((value, index) => {
				if (value === 0) return 0;
				else return getDistance(arr, index, nextIndex);
			});
			console.log(movedArr);

			return movedArr.reduce((acc, curr) => (acc += curr), 0);
		};

		// let forwardDistance = getTotalDistance(nums, forward);
		// let backwardDistance = getTotalDistance(nums, backward);
		let forwardDistance = getDistance(nums, current, forward);
		let backwardDistance = getDistance(nums, current, backward);
		console.log("forward:", forward, forwardDistance);
		console.log("backward:", backward, forwardDistance);
		let nextIndex = forwardDistance < backwardDistance ? forward : backward;

		console.log("nextIndex", nextIndex);
		answer += nums[nextIndex] + getDistance(nums, current, nextIndex);
		nums[nextIndex] = 0;
		current = nextIndex;

		console.log("answer", answer);
		console.log("current", current);
		console.log("nums", nums);
	}

	return answer;
}

console.log(solution("AABAAAAAAABBB"));
