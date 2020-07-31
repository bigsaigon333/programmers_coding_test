function solution(n) {
	var answer = "";
    var c124 = ["1", "2", "4"];


    while (n > 0){
    	var r = (n-1) % 3;
    	answer = c124[r] + answer;

		n = parseInt((n-1)/3);
    }



    return answer;
}


console.log(solution(27));
