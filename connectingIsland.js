/* Date: 2020-08-26 Wed 23:18
1st try: 57m 53s >> 통과
Comments
1. 처음에 어떤 알고리즘?을 써야할지 몰라서, 플로이드 알고리즘으로 구현해보았다. >> 실패
2. 질문을 보니, 최소신장트리인 크루스칼 알고리즘으로 구현가능하다고 하여 이를 적용. 
3. 그리디 알고리즘: 매 선택에서 최적의 해를 누적해서 가면 전체의 최적해가 구해지는 알고리즘
(부분적인 최적해가 전체적인 최적해가 되는 마법!)
 */

function solution(n, costs) {
	const group = Array(n)
		.fill(0)
		.map((v, i) => i);

	let ng = n;

	costs.sort((a, b) => a[2] - b[2]);

	let answer = 0;
	for (let i = 0; i < costs.length; i++) {
		let [v1, v2, c] = costs[i];
		if (group[v1] === group[v2]) continue;

		let oldGroup = group[v2];
		for (let j = 0; j < n; j++) {
			if (group[j] === oldGroup) {
				group[j] = group[v1];
				// console.log(`group[${j}] has been changed to ${group[v1]}`);
			}
		}

		answer += c;

		if (group.every((v, i) => v === group[0])) break;
		// console.log(costs[i]);
		// console.table(group);
	}
	// console.table(group);

	return answer;
}

// console.log(
// 	solution(4, [
// 		[0, 1, 1],
// 		[0, 2, 2],
// 		[1, 2, 5],
// 		[1, 3, 1],
// 		[2, 3, 8],
// 	])
// );

// console.log(
// 	solution(6, [
// 		[1, 4, 1],

// 		[0, 3, 2],
// 		[1, 2, 2],
// 		[0, 4, 3],

// 		[2, 5, 3],
// 		[4, 5, 4],
// 		[0, 1, 5],
// 		[3, 4, 10],
// 	])
// );

// console.log(
// 	solution(4, [
// 		[3, 1, 2],

// 		[1, 2, 3],
// 		[2, 3, 3],
// 		[3, 0, 4],
// 		[0, 1, 5],
// 	])
// );
console.log(
	solution(5, [
		[0, 1, 1],

		[3, 4, 1],
		[0, 2, 2],
		[1, 3, 3],
		[1, 2, 5],

		[2, 3, 8],
	])
);

// console.log(
// 	solution(5, [
// 		[0, 1, 1],
// 		[3, 4, 1],
// 		[1, 2, 2],
// 		[2, 3, 4],
// 	])
// );

// console.log(
// 	solution(4, [
// 		[2, 3, 3],
// 		[2, 4, 4],
// 		[3, 4, 7],
// 		[3, 5, 3],
// 		[4, 5, 10],
// 	])
// );
