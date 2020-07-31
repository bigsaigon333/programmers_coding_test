function solution(clothes) {
	let answer = 1;

	let cover = new Map();

	clothes.forEach((v, i) => {
		let key = v[1];
		let value = v[0];

		if (cover.get(key) === undefined) {
			cover.set(key, new Array(value));
		} else {
			cover.get(key).push(value);
		}
		console.log(cover);
	});

	for (const key of cover.keys()) {
		answer *= cover.get(key).length + 1;
	}
	answer--;

	return answer;
}

console.log(
	solution([
		["yellow_hat", "headgear"],
		["blue_sunglasses", "eyewear"],
		["green_turban", "headgear"],
	])
);
