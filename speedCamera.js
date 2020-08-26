/* Date: 2020-08-27 Thu 00:24
Time: 55m 33s >> 통과
Comment: 도저히 고민해도 구현을 못해서 인터넷 검색. 인터넷 검색한 결과를 바탕으로 구현하여 통과하였으나, 
다시 0부터 짜라고 하면 짤 수 있을까? 100% 와닿지는 않는다. 100% 소화하지 못했다. */

function solution(routes) {
	let answer = 1;

	routes.sort((a, b) => a[0] - b[0]);
	// console.log(routes);

	let pos = routes[0][1];

	for (let i = 0; i < routes.length - 1; i++) {
		// 현재차량의 진출지점(routes[i][1])이 기준차량의 진출지점(pos)보다 전에 위치한다면 기준차량을 현재차량으로 변경
		if (pos > routes[i][1]) pos = routes[i][1];

		// 기준차량의 진출지점(pos)이 현재차량의 진입지점보다 전에 위치한다면,
		// 전의 차량들과 같은 단속카메라를 사용할 수 없기 때문에 answer++, 기준차량을 현재차량으로 변경
		if (pos < routes[i + 1][0]) {
			answer++;
			pos = routes[i + 1][1];
		}
	}

	return answer;
}

console.log(
	solution([
		[-20, 15],
		[-14, -5],
		[-18, -13],
		[-5, -3],
	])
);
