/* 
Date: 2020-08-24 Mon 22:44
1st try: 15m 52s
Comment:
대학때 풀었던 아마 projectEuler ? 문제가 아직도 기억난다.
동적계획법은 기존에 계산한 값을 다시 잘 재활용하는 것이 관건.
 */
function solution(triangle) {
	var answer = Array(triangle[triangle.length - 1].length).fill(0);

	for (let i = 0; i < triangle.length; i++) {
		if (i === 0) continue;

		for (let j = 0; j < triangle[i].length; j++) {
			if (j === 0) {
				triangle[i][j] += triangle[i - 1][0];
			} else if (j === triangle[i].length - 1) {
				triangle[i][j] += triangle[i - 1][i - 1];
			} else {
				triangle[i][j] += Math.max(triangle[i - 1][j - 1], triangle[i - 1][j]);
			}
		}
		// console.log(`triangle[${i}]: ${triangle[i]}`);
	}

	return Math.max(...triangle[triangle.length - 1]);
}

console.log(solution([[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]]));
