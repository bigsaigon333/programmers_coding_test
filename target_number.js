function solution(numbers, target) {
    var answer = 0;

    var find = function(v, i) {
        // console.log(`(v,i): (${v}, ${i})`);
        if ( i === numbers.length ) {
            if ( v === target) {
                answer++;
                // console.log(`!!!!!(v,i): (${v}, ${i})!!!!!!`);
            }
        }
        else {
            find(v+numbers[i], i+1);
    
            find(v-numbers[i], i+1);
        }
    
    }
    

    find(0,0);

    return answer;
}



console.log(solution([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 3));