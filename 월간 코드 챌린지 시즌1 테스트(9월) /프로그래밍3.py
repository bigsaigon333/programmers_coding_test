def solution(a):
    answer = 0
    
    left = [0] * len(a)
    right = [0] * len(a)
    
    left[0] = a[0]
    for i in range(1,len(a)):
        left[i] = min(a[i], left[i-1])
    
    right[len(a)-1] = a[len(a)-1]
    for i in reversed(range(0, len(a)-1)):
        right[i] = min(a[i], right[i+1])
        
    # print(*left)
    # print(*right)
    
    answer = 2
    for i in range(1, len(a)-1):
        if a[i] < max(left[i-1], right[i+1]) :
            answer+=1
        
    
    return answer