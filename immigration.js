/* 
Date: 2020-08-26 Wed 22:03
1st try: 24m 51s >> 통과
Comment:
이분탐색을 얼추 비슷하게 구현하는 것은 매우 쉬움. 다만, 중복된 것이 있을때 왼쪽을 출력할지 오른쪽을 출력할지 등을 고려하면
언제 while문을 나가는지, st를 반환할지, en을 반환할지 등 매우 까다로워진다.
섣불리 작성하지말고, st mid en 이 가까워질때를 잘 생각하자
 */

function solution(n, times) {
	times.sort((a, b) => a - b);
	let st = 1;
	let en = times[times.length - 1] * n + 1;

	while (st < en) {
		let mid = Math.floor((st + en) / 2);
		// console.log(st, mid, en);

		let val = times.reduce((acc, curr) => (acc += Math.floor(mid / curr)), 0);
		if (val < n) {
			st = mid + 1;
		} else if (val >= n) {
			en = mid;
		}
	}
	return st;
}

console.log(solution(6, [7, 10]));
console.log(solution(6, [6, 5]));
