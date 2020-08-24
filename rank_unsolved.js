/* Date: 2020-08-24 Mon 23:54
1st try: 21m 41s >> 실패
Comment: 그래프 알고리즘을 공부한 후에 다시 도전하자.
 */

function solution(n, results) {
	let count = 0;

	const win = Array(n + 1).fill(0);
	const lose = Array(n + 1).fill(0);

	for (let i = 0; i < results.length; i++) {
		let [winner, loser] = results[i];

		win[winner] += win[loser] + 1;
		lose[loser] += lose[winner] + 1;
	}

	// console.table(win);
	// console.table(lose);

	for (let i = 1; i < win.length; i++) {
		if (win[i] + lose[i] === n) count++;
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
