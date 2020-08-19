function solution(tickets) {
	tickets.sort((arr1, arr2) => {
		// if (arr1[0] === arr2[0]) return arr2[1] > arr1[1] ? -1 : 1;
		// else return arr2[0] > arr1[0] ? -1 : 1;
		return arr2[1] > arr1[1] ? -1 : 1;
	});

	console.log("tickets");
	console.log(tickets);

	const isVisited = new Array(tickets.length).fill(false);
	const stack = [];
	stack.push("ICN");

	// while (isVisited.some((v) => v === false)) {
	while (stack.length > 0) {
		const curr = stack.pop();
		console.log(curr);

		for (let i = 0; i < tickets.length; i++) {
			if (isVisited[i]) continue;

			const [departure, arrival] = tickets[i];
			if (curr === departure) {
				isVisited[i] = true;
				stack.push(arrival);
				// break;
			}
		}
		console.table(stack);
	}
	console.table(stack);

	return stack;
}

function couldFly(curr, ticket) {
	return curr === ticket[0];
}

solution([
	["ICN", "JFK"],
	["HND", "IAD"],
	["JFK", "HND"],
]);

solution([
	["ICN", "SFO"],
	["ICN", "ATL"],
	["SFO", "ATL"],
	["ATL", "ICN"],
	["ATL", "SFO"],
]);

solution([
	["ICN", "A"],
	["ICN", "B"],
	["A", "ICN"],
]);
