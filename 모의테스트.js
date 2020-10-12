function solution(arr) {
	let answer = 0;

	let dx = {};
	let dy = {};

	for (cor of arr) {
		let [x, y] = cor;
		dx[x] = dx[x] === undefined ? 1 : dx[x] + 1;
		dy[y] = dy[y] === undefined ? 1 : dy[y] + 1;
	}

	let X, Y;
	// console.log(dx, dy);
	for (x in dx) {
		if (dx[x] === 1) X = Number(x);
	}

	for (y in dy) {
		if (dy[y] === 1) Y = Number(y);
	}

	return [X, Y];
}

console.log(
	solution([
		[1, 1],
		[2, 2],
		[1, 2],
	])
);
