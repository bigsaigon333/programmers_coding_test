function solution(n) {
	const BASE = 1234567;
	//dp[0] = 0
	//dp[1] = 1
	//dp[2] = 1+1 = 2
	//dp[3] = dp[2] + dp[1] = 2 + 1 = 3
	//dp[4] = dp[3] + dp[2] = 3 + 2 = 5
	//dp[n] = dp[n-1] + dp[n-2]
	let [curr, prev] = [1, 0];

	for (let i = 0; i < n; i++) {
		[curr, prev] = [curr + prev, curr].map((v) => v % BASE);
	}

	return curr;
}
