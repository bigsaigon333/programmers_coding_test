/* Date: 2020-08-24 Mon 23:54
1st try: 21m 41s >> 실패
Comment: 그래프 알고리즘을 공부한 후에 다시 도전하자.

Date: 2020-08-26 Wed 19:53
2nd try: 42m 03s
Comment: 그래프 알고리즘과 크게 관련 있지는 않았다. 다만 인접배열으로 구현할 수 있다는 사실이 유용하긴 하였지만.
그래프를 배열로 옮긴 다음에, 모든 node마다 win과 lose를 다 세어서 n-1의 결과가 있는지 확인하였다.
 */

function solution(n, results) {
	let count = 0;

	const win = Array(n + 1)
		.fill(0)
		.map(() => Array(n + 1).fill(0));
	const lose = Array(n + 1)
		.fill(0)
		.map(() => Array(n + 1).fill(0));

	for (let i = 0; i < results.length; i++) {
		let [winner, loser] = results[i];
		win[winner][loser] = 1;
		lose[loser][winner] = 1;
	}
	// console.table(win);
	// console.table(lose);

	let winCounts = new Array(n + 1).fill(0);
	for (let i = 1; i <= n; i++) {
		let q = [i];
		let vis = new Array(n + 1).fill(false);
		let winCount = 0;
		while (q.length > 0) {
			let curr = q.shift();
			for (let j = 1; j <= n; j++) {
				if (i === j || vis[j]) continue;

				if (win[curr][j] === 1) {
					vis[j] = true;
					q.push(j);
					winCount++;
				}
			}
		}
		winCounts[i] = winCount;
	}
	// console.table(winCounts);

	let loseCounts = new Array(n + 1).fill(0);
	for (let i = 1; i <= n; i++) {
		let q = [i];
		let vis = new Array(n + 1).fill(false);
		let loseCount = 0;
		while (q.length > 0) {
			let curr = q.shift();
			for (let j = 1; j <= n; j++) {
				if (i === j || vis[j]) continue;

				if (lose[curr][j] === 1) {
					vis[j] = true;
					q.push(j);
					loseCount++;
				}
			}
		}
		loseCounts[i] = loseCount;
	}
	// console.table(loseCounts);

	for (let i = 1; i <= n; i++) {
		if (winCounts[i] + loseCounts[i] === n - 1) count++;
	}

	return count;
}

console.log(
	solution(5, [
		[4, 3],
		[4, 2],
		[3, 2],
		[1, 2],
		[2, 5],
	])
);

// console.log(
// 	solution(8, [
// 		[1, 2],
// 		[2, 3],
// 		[3, 4],
// 		[4, 5],
// 		[5, 6],
// 		[6, 7],
// 		[7, 8],
// 	])
// );
