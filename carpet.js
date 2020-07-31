function solution(brown, yellow) {
	let answer = [];
	// 0. W > H
	// 1. brown === 2(W+H-2)
	// 2. brown + yellow === W x H
	let W, H;

	for (W = brown / 2 + 1, H = 1; W >= H; W--, H++) {
		if (W * H === brown + yellow) {
			answer = [W, H];
			break;
		}
	}

	return answer;
}
