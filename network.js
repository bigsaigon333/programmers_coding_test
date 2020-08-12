/* 
2020-08-12 Wed 23:48
1st try: 1h 17m 09s
Comments:
1. BOJ에서 보던 전형적인 BFS라고 생각했던게 오산이었다.
BFS의 문제풀이방법은 비교적 익숙하다고 생각했는데, 문제이해를 제대로 하지 않고 dist 유형이라 판단해버렸다.
2. 2차원 배열이 아니라 1차원 배열로 생각하고 문제풀이를 간결하게 할 수 있을 것 같다.
3. 최대 네트워크의 개수는 n개이다.
4. 각 컴퓨터는 무조건 출발점이 된다.(큐에 들어가게 되어 있다)
 */

function solution(n, computers) {
	let answer = 0;

	const vis = new Array(n).fill(0).map(() => new Array(n).fill(0));
	const q = [];

	for (let i = 0; i < n; i++) {
		if (vis[i][i] === 0) vis[i][i] = ++answer;
		q.push({ x: i, y: i });
		console.log("i", i);

		while (q.length > 0) {
			const curr = q.shift();

			for (let j = 0; j < n; j++) {
				if (computers[j][curr.y] === 1 && vis[j][curr.y] === 0) {
					vis[j][curr.y] = vis[curr.x][curr.y];
					q.push({ x: j, y: curr.y });
				}
			}
			for (let j = 0; j < n; j++) {
				if (computers[curr.x][j] === 1 && vis[curr.x][j] === 0) {
					vis[curr.x][j] = vis[curr.x][curr.y];

					q.push({ x: curr.x, y: j });
				}
			}
		}

		// console.table(vis);
	}
	// console.table(vis);

	return answer;
}
