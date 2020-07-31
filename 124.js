function solution(n) {
	var answer = "";
    var c124 = ["4","1", "2", "4"];


    while (n > 0){
    	var r = n % 3;
    	answer = c124[r].concat(answer);


    	if ( r === 0 ) {
    		n = parseInt((n-1)/3);
    	}
    	 else {
	    	n = parseInt(n/3);
    	}
    }



    return answer;
}


console.log(solution(1));
