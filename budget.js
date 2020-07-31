function solution(budgets, M) {
    var answer = 0;

    budgets.sort((a,b) => a-b);
    // console.log(budgets);
    let totalBudgets = budgets.reduce((sum, budget) => sum + budget);
    // console.log(totalBudgets);

    if ( totalBudgets <= M) {
        answer = budgets[budgets.length-1];
    } 
    else {
        let sum = 0;
        let min = Math.trunc(M / budgets.length);
        let max = budgets[budgets.length-1];
        let remained = 0;

        for( let i = 0; i < budgets.length; i++) {
            if ( sum + budgets[i] * (budgets.length-i) <= M) {
                sum += budgets[i];
                min = budgets[i];
            }
            else {
                max = budgets[i];
                answer = Math.trunc((M-sum) / (budgets.length - i));
                remained = budgets.length - i;
                break;
            }
        }
        
        console.log(`(sum, max, min, remained): (${sum}, ${max}, ${min}, ${remained})`);
    }

    return answer;
}
console.log(solution([5, 5, 5, 15, 25], 50));