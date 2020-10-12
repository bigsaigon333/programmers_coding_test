function solution(word, pages) {
	function getBasicScore(str) {
		let basic = new RegExp(`(${word})`, "gi");
		let count = 0;

		let ret;

		while ((ret = basic.exec(str)) !== null) {
			// console.log(ret);
			count++;
		}

		return count;
	}

	function getExternalLinkCount(str) {
		let a = new RegExp(`<a href="https://(.*)".*</a>`, "gi");
		let ret = [...str.matchAll(a)].map((v) => v[1]);

		return ret;
	}
	let url = new RegExp(`<meta property="og:url" content="https://(.*)"`);

	for (const page of pages) {
		// console.log(page);
		// getBasicScore(page);
		getExternalLinkCount(page);
	}

	// console.log(pages[1].match(url));
}

module.exports = solution;
