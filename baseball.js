function solution(baseball) {
	var numAnswer = 0;

	let nums = [];
	for (let i = 0; i < 1000; i++) {
		nums[i] = false;
	}
	for (let i = 1; i < 10; i++) {
		for (let j = 1; j < 10; j++) {
			for (let k = 1; k < 10; k++) {
				if (i === j || j === k || k === i) {
					continue;
				} else {
					nums[100 * i + 10 * j + k] = true;
				}
			}
		}
	}

	const getNumStrike = (a, b) => {
		let num = 0;
		for (let i = 0; i < 3; i++) {
			if (a[i] === b[i]) {
				num++;
			}
		}
		return num;
	};

	const getNumBall = (a, b) => {
		let num = 0;

		for (let i = 0; i < 3; i++) {
			if (a[i] === b[i]) {
				continue;
			}
			for (let j = 0; j < 3; j++) {
				if (a[j] === b[j]) {
					continue;
				} else if (i === j) {
					continue;
				} else if (a[i] === b[j]) {
					num++;
				}
			}
		}

		return num;
	};

	baseball.forEach(([question, strike, ball], index) => {
		console.log("question", question);
		console.log("strike", strike);
		console.log("ball", ball);

		for (let i = 1; i < 10; i++) {
			for (let j = 1; j < 10; j++) {
				for (let k = 1; k < 10; k++) {
					if (i === j || j === k || k === i) {
						continue;
					} else {
						let val = 100 * i + 10 * j + k;
						let str = val.toString();
						let numStrike = getNumStrike(str, question.toString());
						let numBall = getNumBall(str, question.toString());

						// console.log(str, numStrike, numBall);
						if (numStrike !== strike || numBall !== ball) {
							nums[val] = false;
						}
					}
				}
			}
		}
	});

	for (let i = 1; i < 10; i++) {
		for (let j = 1; j < 10; j++) {
			for (let k = 1; k < 10; k++) {
				let answer = 100 * i + 10 * j + k;
				if (nums[answer] === true) {
					console.log(answer);
					numAnswer++;
				}
			}
		}
	}

	return numAnswer;
}

console.log(
	solution([
		[123, 1, 1],
		[356, 1, 0],
		[327, 2, 0],
		[489, 0, 1],
	])
);
