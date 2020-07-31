function solution(priorities, location) {

  var answer = 0;
  var isBiggest = [];
  var do_queue = [];
  var wait_queue = [];
  var queue = [];

  for( let i = 0; i < priorities.length; i++) {
    isBiggest[i] = true;
  }
  //console.log(isBiggest);

  for( let i = 0; i < priorities.length; i++) {
    for( let j = i+1; j < priorities.length; j++) {
      if ( priorities[i] < priorities[j]) {
        isBiggest[i] = false;
        break;
      }
    }
  }
 console.log(isBiggest);

  for( let i = 0; i < priorities.length; i++) {
    if( isBiggest[i] ) {
      do_queue.push(i);
    } else {
      wait_queue.push(i);
    }
  }
  
  queue = do_queue.concat(wait_queue);
  console.log(queue);

  for( let i = 0; i < priorities.length; i++) {
    if( queue[i] === location ) {
      answer = i+1;
      break;
    }
  }

  return answer;
}

var ret = solution([3,2,1,4,2,8], 3);

console.log(ret);
