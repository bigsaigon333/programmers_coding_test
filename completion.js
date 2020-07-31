function solution(participant, completion) {
    let p_map = new Map();

    for(let c of completion) {
        // console.log(c);
        if (p_map[c] === undefined) {
            p_map[c] = 1;
        }
        else {
            p_map[c]++;
        }
    }

    //console.log(p_map);

    for(let p of participant) {
        if (p_map[p] === 0 || p_map[p] === undefined){
            return p;
        } else {
            p_map[p]--;
        }
    }
    
}

console.log(solution(["marina", "josipa", "nikola", "vinko", "filipa"], ["josipa", "filipa", "marina", "nikola"]));
