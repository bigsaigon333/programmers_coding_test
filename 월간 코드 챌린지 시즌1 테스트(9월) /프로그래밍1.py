from itertools import combinations

def solution(numbers):
    
    answer = sorted(set(map(lambda x : x[0] + x[1], combinations(numbers,2))))
    
    
    return answer