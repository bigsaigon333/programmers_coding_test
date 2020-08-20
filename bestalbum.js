/* 
Date: 2020-08-20 Thu
time: 28m 56s >> 통과
Comment:
1. 수많은 도전 끝에 드디어 해내다. 사실 로직이 어려운 건 아닌데, 이걸 자료구조로 어떻게 구현하는 지가 관건인 문제
2. 어찌어찌 배열과 객체를 이용하여 풀었는데, 이게 최선인가 라는 의문이 남음
 */

function solution(genres, plays) {
	const answer = [];

	const MX = Array.from(new Set(genres)).length;
	const key = [];
	const value = new Array(MX).fill(0).map(() => new Array());

	for (let i = 0; i < genres.length; i++) {
		let idx;
		if (key.includes(genres[i])) {
			idx = key.indexOf(genres[i]);
		} else {
			key.push(genres[i]);
			idx = key.length - 1;
		}
		value[idx].push({ play: plays[i], i });
	}

	const nKey = [];

	value.forEach((arr, i) => {
		arr.sort((obj1, obj2) => obj2.play - obj1.play);
		nKey.push({
			genre: key[i],
			sum: arr.reduce((acc, curr) => (acc += curr.play), 0),
			i,
		});
	});
	nKey.sort((obj1, obj2) => obj2.sum - obj1.sum);
	// console.table(nKey);
	// console.table(value);

	for (let i = 0; i < nKey.length; i++) {
		answer.push(value[nKey[i].i][0].i);
		if (value[nKey[i].i].length > 1) answer.push(value[nKey[i].i][1].i);
	}
	// console.log(answer);

	return answer;
}

solution(
	["pop", "classic", "pop", "pop", "SexyDance"],
	[500, 600, 150, 800, 2500]
);
