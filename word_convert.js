function solution(begin, target, words) {
	if (!words.includes(target)) return 0;

	let answer = 0;
	// let vis = new Array(words.length).fill(false);
	let dist = new Array(words.length).fill(0);
	const q = [];

	q.push({ word: begin, idx: 0 });

	while (q.length > 0) {
		let curr = q.shift();
		// console.log(curr);

		if (curr.word === target) {
			answer = dist[curr.idx];
			break;
		}

		for (let i = 0; i < words.length; i++) {
			if (dist[i] > 0) continue;

			if (couldConvert(curr.word, words[i])) {
				dist[i] = dist[curr.idx] + 1;
				q.push({ word: words[i], idx: i });
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
