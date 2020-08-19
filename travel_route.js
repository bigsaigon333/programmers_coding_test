/* 
Date: 2021-08-19 Wed 23:57
2st try: 1h 14m 30s >> 통과
Comments 
1. 단순한 DFS 문제라 생각하고 달려들었던 것이 실수였다. 그냥 거리값만 구하는 것이라면 상관없었을텐데, 경로를 전부 출력하여야 했기에 
level과 이를 담을 배열이 필요했다. 따라서 중간에 backtracking 으로 생각하고 재귀함수로 변경하였다.
2. backtracking 잘 기억이 안나네.. baarkingdog 강의 다시 듣자
3. string 간의 (-) 연산은 NaN을 반환한다. 다만 부등호 ><= 연산은 되니, 부등호연산 후 -1, 1 비교하는 것으로 sort함수를 작성한다.
 */

function solution(tickets) {
	tickets.sort((arr1, arr2) => {
		return arr2[1] > arr1[1] ? -1 : 1;
	});
	// console.log("tickets");
	// console.log(tickets);

	const isVisited = new Array(tickets.length).fill(false);
	const answer = new Array(tickets.length + 1).fill("");

	answer[0] = "ICN";

	function rec(level, curr) {
		if (level === tickets.length + 1) {
			// console.table(answer);
			// console.table(isVisited);
			return true;
		}
		// console.log(level, curr);

		for (let i = 0; i < tickets.length; i++) {
			const [departure, arrival] = tickets[i];
			if (isVisited[i] || departure !== curr) continue;

			// console.log(departure, arrival);

			isVisited[i] = true;
			answer[level] = arrival;
			if (rec(level + 1, arrival)) return true;
			isVisited[i] = false;
		}
		// return false;
	}
	rec(1, "ICN");
	// console.table(answer);

	return answer;
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
	["B", "ICN"],
]);
