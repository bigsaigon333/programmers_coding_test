function solution(heights) {
	var answer = [];

	

	for(var i=heights.length-1; i>=0; i--) {
		answer[i] = 0;
		for(var j=i-1; j>=0; j--) {
			if(heights[i]<heights[j]){
				answer[i] = j+1;
				break;
			}
		}
	}



	return answer;
}

console.log(solution([1,5,3,6,7,6,]));
