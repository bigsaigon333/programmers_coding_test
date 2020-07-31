function solution(n) {
    var answer = [];

    answer = origami(0, n);

    return answer;
}


function origami(v, n) {
	// console.log("(v, n): " + "("+ v+ ", "+ n +")");
	if ( n === 1) {
		// console.log([v]);
		return [v];
	} else {
		return origami(0, n-1).concat([v].concat(origami(1,n-1)));
	}
}

console.log(solution(4));