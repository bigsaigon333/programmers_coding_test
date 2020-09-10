from math import comb

def solution(a):
    answer = 0
    row_len = len(a)
    col_len = len(a[0])
    n = [0] * col_len
    
    for i in range(len(a)) :
        for j in range(len(a[i])) :
            if a[i][j] == 1:
                n[j] += 1
    
    print(row_len, col_len)
    print(n)
    
    def rec (even, odd, val, lev) :
        print(even, odd, val, lev)
        nonlocal answer
        
        if lev == col_len :
            if even == row_len and odd == 0 :
                answer += val
                print(f"{val}is added to {answer}")
            return
        
        nxt_even = even+n[lev]
        nxt_odd = odd + n[lev]

        if nxt_even > row_len :
          nxt_even %= row_len
        
        if nxt_odd < 0 :
          nxt_odd %= row_len
        
        # if odd 

        if nxt1 == nxt2 :
            rec(odd, val, lev+1)
        else :
            rec(nxt1, val*comb(odd, n[lev]), lev+1)
            rec(nxt2, val*comb(row_len-odd, n[lev]), lev+1)

        
    rec(row_len- n[0], n[0], comb(row_len, n[0]), 1)    
    
    return answer