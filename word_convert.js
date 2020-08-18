/* 
Date: 2020-08-18 Tue 18:35
1st try: 20m 03s >> 성공
Comment:
BFS/DFS에는 Board, vis, dist, q 가 존재한다. dist 가 vis의 기능을 겸하기도, vis가 dist의 기능을 겸하기도 한다. 
모르겠으면 다 구현. 생각이 잘 되면 하나로 통합해서 구현
 */

function solution(begin, target, words) {
	if (!words.includes(target)) return 0;

	let answer = 0;
	let vis = new Array(words.length).fill(false);
	const q = [];

	q.push({ word: begin, dist: 0 });

	while (q.length > 0) {
		let curr = q.shift();
		// console.log(curr);

		if (curr.word === target) {
			answer = curr.dist;
			break;
		}

		for (let i = 0; i < words.length; i++) {
			if (vis[i]) continue;

			if (couldConvert(curr.word, words[i])) {
				vis[i] = true;
				q.push({ word: words[i], dist: curr.dist + 1 });
			}
		}
		// console.table(q);
	}

	return answer;
}

function couldConvert(word1, word2) {
	let diff = 0;
	for (let i = 0; i < word1.length; i++) {
		if (word1[i] !== word2[i]) diff++;
	}

	return diff === 1;
}

console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]));
