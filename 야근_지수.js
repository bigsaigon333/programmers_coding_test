let Heapq = require("./lib/Heapq.js");
function solution(n, works) {
	const sum = works.reduce((acc, curr) => acc + curr, 0);
	if (sum <= n) return 0;

	const heapq = new Heapq(works.map((v) => -v));

	for (let i = 0; i < n; i++) {
		const top = heapq.extractTop();
		heapq.insert(top + 1);
	}

	console.log(heapq.converToArray());

	return heapq.converToArray().reduce((a, c) => a + c ** 2, 0);
}

// console.log(solution(4, [4, 3, 3]));
// console.log(solution(1, [2, 1, 2]));
// console.log(solution(3, [1, 1]));
// console.log(solution(50, [46, 15]));

const h = new Heapq([9, 3, 8, 7, 6, 45, 1, 9]);

console.log(h.converToArray());
