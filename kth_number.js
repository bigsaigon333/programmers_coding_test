function solution(array, commands) {
    var answer = [];
    commands.forEach(function(com) {
      //console.log(com);

      var start = com[0]-1;
      var end = com[1];
      var k = com[2]-1;

      answer.push(array.slice(start, end).sort((a,b) => a-b)[k]);
      

    });
    return answer;
}

console.log(solution([1, 3, 10, 20,2, 14, 51, 65], [[1,6,3]]));

