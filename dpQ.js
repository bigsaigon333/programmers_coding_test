/* Date: 2020-08-26 Wed 19:07
1st try: 14m 38s >> 통과
Comment: operations의 길이가 최대 1,000,000 이기 때문에  이를 고려해서 이중우선순위큐를 구현하려고 하였으나, 도무지 실마리가 안잡혀
그냥 일반적인 배열으로 해서 정렬 돌리는 것으로 구현해보았다. 그런데 되네?? 너무 어렵게 생각했나? 
Programmers는 BOJ에 비해 Test Case가 빡세지 않으니까 일단 어느정도 선까지 되게끔 빠르게 구현해보자.

 */
function solution(operations) {
	var answer = [];

	let q = [];
	for (let i = 0; i < operations.length; i++) {
		let [command, num] = operations[i].split(" ");
		num = Number(num);
		console.log(operations[i]);

		if (command === "I") {
			q.push(num);
			q.sort((a, b) => a - b);
		} else if (q.length === 0) {
			continue;
		} else {
			if (num === 1) {
				q.pop();
			} else {
				q.shift();
			}
		}
		console.table(q);
	}

	if (q.length === 0) return [0, 0];
	else return [Math.max(...q), Math.min(...q)];

	return answer;
}

console.log(
	solution([
		"I -45",
		"I 653",
		"D 1",
		"I -642",
		"I 45",
		"I 97",
		"D 1",
		"D -1",
		"I 333",
	])
);
