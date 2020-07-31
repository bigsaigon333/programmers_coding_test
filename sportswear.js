 function solution(n, lost, reserve) {
    var answer = 0;

    let sportswear = new Array(n+1);

    for( let i = 1; i < sportswear.length; i++ ){
    	sportswear[i] = 1;
    }

	for (var i = 0; i < lost.length; i++) {
		sportswear[lost[i]]--;
	}

	for (var i = 0; i < reserve.length; i++) {
		sportswear[reserve[i]]++;
	}

	for (var i = 1; i < sportswear.length; i++) {
		if (sportswear[i] === 0) {
			if (sportswear[i+1] > 1) {
				sportswear[i] = 1;
				sportswear[i+1]--;
				answer++;
			}
			else if (sportswear[i-1] > 1) {
				sportswear[i] = 1;
				sportswear[i-1]--;
				answer++;
			}
		}
		else {
			answer++;
		}
	}

	return answer;
}

console.log(solution(3, [3], [1]));