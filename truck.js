function solution(bridge_length, weight, truck_weights) {
    
    var answer = 0;
    
    var bridge = Array();
    bridge.length = bridge_length-1;
    init(bridge);

    //initial one
    bridge.push(truck_weights.shift());
    answer++; 

    
    while(sum_queue(bridge)+sum_queue(truck_weights)>0) {
        bridge.shift();
        if(sum_queue(bridge) + truck_weights[0] <= weight) {
           bridge.push(truck_weights.shift()); 
        }
        else {
            bridge.push(0);
        }
        answer++;

    }
    
    
    
    return answer;
}

function sum_queue(q) {
    var sum = 0;
     for(var i = 0; i < q.length; i++)
         sum += q[i];
     return sum;
}

function init(q) {
    for(var i = 0; i < q.length; i++)
        q[i] = 0;
    }