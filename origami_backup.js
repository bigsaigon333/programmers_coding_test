function solution(n) {
    var answer = [];

	var origami = function(arr, v, n) {
		console.log("(v, n): " + "("+ v+ ", "+ n +")");
		if ( n === 1) {
			if ( v === 0 ) {
				arr.unshift(0);
				// console.log(arr);
			} else {
				arr.push(1);
			}
		} else {
			origami(arr, 0, n-1);
			console.log(arr);

			arr.push(v);
			console.log(arr);

			origami(arr, 1, n-1);
			console.log(arr);
		}
	}

    origami(answer, 0, n);


    return answer;
}



console.log(solution(3));