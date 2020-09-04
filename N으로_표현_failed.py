# Date: 2020-09-03 Thu 22:11
# 2nd try: 46m 13s >> 실패
# Comment: dp[n] 이 dp[n-1] 로만 구성되는가? 아니다. 그걸 잘 생각해보아라

def solution(N, number):
    answer = 0

    N_MAX = 8
    n_max = 32000

    dp = [[0 for _ in range(n_max+1)] for _ in range(N_MAX+1)]
    for i in range(1, N_MAX+1):
        NN = int('1'*i)*N
        if NN <= n_max:
            dp[i][NN] = 1

    for i in range(1, N_MAX):
        for j in filter(lambda x: dp[i][x], range(0, n_max+1)):
            if 0 <= j+N <= n_max:
                dp[i+1][j+N] += dp[i][j]
            if 0 <= j-N <= n_max:
                dp[i+1][j-N] += dp[i][j]
            if 0 <= j*N <= n_max:
                dp[i+1][j*N] += dp[i][j]
            if 0 <= j//N <= n_max:
                dp[i+1][j//N] += dp[i][j]

    for i in range(1, N_MAX+1):
        if dp[i][number]:
            return i

    return -1
