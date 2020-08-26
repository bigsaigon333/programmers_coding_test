/* 
Date: 2020-08-25 Tue 23:12
1st try: 2m 18s >> 통과
Comment: BOJ에서 동일한 문제를 풀어봐서 쉽게 해결!
 */
function solution(n) {
	const d = Array(n + 1).fill(0);
	d[0] = 1;
	d[1] = 1;

	for (let i = 2; i <= n; i++) {
		d[i] = (d[i - 1] + d[i - 2]) % 1000000007;
	}

	return d[n];
}
