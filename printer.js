function solution(priorities, location) {

  var answer = 0;

  var printer = {
    list: [],
    sort: function() {
      // console.log(this.list);

      var maxIndex = 0;
      for( let i = maxIndex+1; i < this.list.length; i++ ) {
          if (this.list[maxIndex].p < this.list[i].p) {
            maxIndex = i;
          }
      }

      // console.log("maxIndex:" + maxIndex);

      for( let i = 0; i < maxIndex; i++ ) {
        this.list.push(this.list.shift());
      }

      // console.log(this.list);
      // console.log("");
    }
  }
  
  priorities.forEach((p, i) => printer.list.push({p,i}));
  

  for(let i = 0; true; i++){
    printer.sort();
    // console.log(printer.list);
    // console.log();

    let first = printer.list[0];
    if( first.i === location ) {
      answer = i+1;
      break;
    } else {
      printer.list.shift();
    }
  }

  return answer;
}


var ret = solution([1,2,3,4], 2);

console.log(ret);
