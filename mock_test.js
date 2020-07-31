function solution(answers) {
    var answer = [];
    var numRight = [0,0,0];

    var sol = [[1,2,3,4,5], [2,1,2,3,2,4,2,5], [3,3,1,1,2,2,4,4,5,5]];

    for(var i = 0; i < answers.length; i++ ) {
    	sol.forEach(function(arr, j){
    		if (answers[i] === arr[i%arr.length]) {
    			numRight[j]++;
    		}
    	});
    }

    // console.log(numRight);
    var max = numRight.reduce((a,b) => Math.max(a,b));
    // console.log(max);
    // console.log(numRight);

    for(var i = 0; i < numRight.length; i++) {
    	// console.log(numRight[i]+" " + max);
    	if( numRight[i] === max ){
    		answer.push(i+1);
    		// console.log(answer);
    	}
    }


    return answer;
}

console.log(solution([1,3,2,4,5]));