function solution(genres, plays) {
	const answer = [];

	const album = new Map();

	for (let i = 0; i < genres.length; i++) {
		if (album.get(genres[i]) === undefined) {
			album.set(genres[i], [
				{
					index: i,
					numPlay: plays[i],
				},
			]);
		} else {
			album.get(genres[i]).push({
				index: i,
				numPlay: plays[i],
			});
		}
		// console.log(album);
	}

	album.forEach((value, key) => {
		value.sort((a, b) =>
			a.numPlay === b.numPlay ? a.index > b.index : a.numPlay < b.numPlay
		);
	});

	console.log(album);

	return answer;
}

solution(
	["pop", "classic", "pop", "pop", "classic"],
	[500, 600, 150, 800, 2500]
);
