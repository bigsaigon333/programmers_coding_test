function solution(N, number) {
	let answer = 0;
	let stack = [N];
	if (N === number) {
		return 1;
	}

	for (let i = 2; i <= 8; i++) {
		let temp_stack = Object.assign([], stack);
		stack = [];
		console.log(temp_stack);
		for (let num = temp_stack.pop(); temp_stack.length > 0; ) {
			if (num + N === number) {
				return i;
			} else {
				stack.push(num + N);
			}

			if (num - N === number) {
				return i;
			} else {
				stack.push(num - N);
			}

			if (num * N === number) {
				return i;
			} else {
				stack.push(num * N);
			}

			if (num / N === number) {
				return i;
			}
		}
	}
	return -1;
}

solution(5, 12);
