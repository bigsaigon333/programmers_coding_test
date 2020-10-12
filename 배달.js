const Heapq = require("./Heapq.js");

function solution(N, road, K) {
	const adj = new Array(N + 1).fill(0).map(() => []);

	for (const [a, b, c] of road) {
		adj[a].push([c, b]);
		adj[b].push([c, a]);
	}
	// console.table(adj)

	const dist = new Array(N + 1).fill(Infinity);
	dist[1] = 0;

	const hq = new Heapq([[0, 1]], (a, b) => a[0] - b[0]);
	// console.table(hq.convertToArray())

	while (hq.size() > 0) {
		const [c, b] = hq.extractTop();

		if (c !== dist[b]) continue;

		adj[b].forEach(([cost, next]) => {
			if (dist[next] > c + cost) {
				dist[next] = c + cost;
				hq.insert([c + cost, next]);
			}
		});
	}

	// console.table(dist);

	return dist.filter((d) => d <= K).length;
}

// console.log(
// 	solution(
// 		5,
// 		[
// 			[1, 2, 1],
// 			[2, 3, 3],
// 			[5, 2, 2],
// 			[1, 4, 2],
// 			[5, 3, 1],
// 			[5, 4, 2],
// 		],
// 		3
// 	)
// );

console.log(
	solution(
		6,
		[
			[1, 2, 1],
			[1, 3, 2],
			[2, 3, 2],
			[3, 4, 3],
			[3, 5, 2],
			[3, 5, 3],
			[5, 6, 1],
		],
		4
	)
);
