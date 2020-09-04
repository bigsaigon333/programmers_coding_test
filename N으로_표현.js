/* 
Date: 2020-08-21 Fri
Several try: 1h 03m 40s >> 통과
Comment:
동적계획법은 Brute Force + 공간활용도↑ 같은 느낌이다.
사용한 공간을 재활용함으로써 복잡한 시간복잡도를 풀어나간다.
 */

function solution(N, number) {
	const MX = 8;

	const arr = new Array(MX + 1).fill(0).map(() => []);
	for (let i = 1; i <= MX; i++) {
		arr[i].push(Number(String(N).repeat(i)));
	}
	// arr[1].push(-N);

	for (let i = 2; i <= MX; i++) {
		for (let j = 1; j < i; j++) {
			for (let k = 0; k < arr[j].length; k++) {
				for (let l = 0; l < arr[i - j].length; l++) {
					let num1 = arr[j][k];
					let num2 = arr[i - j][l];
					arr[i].push(num1 + num2);
					arr[i].push(num1 - num2);
					arr[i].push(num1 * num2);
					if (num2 !== 0) arr[i].push(Math.floor(num1 / num2));
				}
			}
		}
		arr[i] = Array.from(new Set(arr[i])).sort((a, b) => Number(a) - Number(b));
	}

	for (let i = 1; i <= MX; i++) {
		if (arr[i].includes(number)) return i;
	}
	return -1;
}

console.log(solution(5, 12));
console.log(solution(2, 11));
// console.log(solution(5, 27));
