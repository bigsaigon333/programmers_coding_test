/* Date: 2020-08-24 Mon 23:30
1st try: 42m 49s
Comment:
그래프를 이렇게 푸는 게 맞는가?
BFS의 방법이 생각나서 그렇게 풀었다.
Javascript의 콜백함수를 너무 많이 쓰지말자. 문제풀때는 심플하게! */

function solution(n, edge) {
	var answer = 0;
	const MX = 20000 + 5;
	const dist = Array(n + 1).fill(-1);
	dist[1] = 1;

	const q = Array(MX);
	let head = 0;
	let tail = 0;

	const q_push = (val) => (q[tail++] = val);
	const q_shift = () => q[head++];
	const q_size = () => tail - head;
	const q_print = () => {
		process.stdout.write("[");
		for (let i = head; i < tail; i++) {
			if (i !== head) process.stdout.write(", ");
			process.stdout.write(String(q[i]));
		}
		process.stdout.write("]\n");
	};
	q_push(1);

	while (q_size() > 0) {
		let curr = q_shift();
		// console.log("curr: ", curr);

		for (let i = 0; i < edge.length; i++) {
			let vertex = edge[i];

			if (vertex[0] !== curr && vertex[1] !== curr) continue;

			let node = vertex[0] === curr ? vertex[1] : vertex[0];

			if (dist[node] > 0) continue;
			dist[node] = dist[curr] + 1;
			q_push(node);
		}

		// q_print();
		// console.table(dist);
	}

	// console.log(dist);

	const max = Math.max(...dist);
	return dist.filter((v) => v === max).length;
}
console.log(
	solution(6, [
		[3, 6],
		[4, 3],
		[3, 2],
		[1, 3],
		[1, 2],
		[2, 4],
		[5, 2],
	])
);
