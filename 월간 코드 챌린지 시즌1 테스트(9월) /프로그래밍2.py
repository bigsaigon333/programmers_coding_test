def solution(n):
    answer = [[0 for _ in range(i+1)] for i in range(n)]
    head = [0 for i in range(n)]
    tail = [i for i in range(n)]

    lev = -1
    num = 1
    for i in range(n) :
        # print("i", i)
        for j in range(1, n-i+1) :
            
            if i % 3 == 0:
                lev += 1
                idx = head[lev]
                head[lev]+=1
            elif i % 3 == 1 :
                idx = head[lev]
                head[lev]+=1
            elif i% 3 == 2 :
                lev -= 1
                idx = tail[lev]
                tail[lev] -= 1
                
            answer[lev][idx] =num
            num +=1    
            
    ret= []
    
    for arr in answer :
        for item in arr :
            ret.append(item)
                
                
    # print(ret)
    
    return ret