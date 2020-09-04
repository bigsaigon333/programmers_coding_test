
"""
보와 기둥을 별도의 리스트로 선언하자
 [x, y, a, b]
 x: 가로 좌표
 y: 세로 좌표
 a: 기둥 - 0↑  보 - 1→
 b: 삭제 - 0 설치 - 1
 
 기둥 설치가능 조건: y = 0 or board[x][y-1] = 1(기둥) or board[x-1][y] = 0(보) or board[x][y] = 0(보)
 보 설치가능 조건: board[x][y-1] = 1(기둥) or board[x+1][y-1] = 1(기둥) or 
 (board[x-1][y] = 0(보) and board[x+1][y] = 0(보))
 
I: [[1,0,0,1],[1,1,1,1],[2,1,0,1],[2,2,1,1],[5,0,0,1],[5,1,0,1],[4,2,1,1],[3,2,1,1]]
O: [[1,0,0],[1,1,1],[2,1,0],[2,2,1],[3,2,1],[4,2,1],[5,0,0],[5,1,0]]


"""
# Date: 2020-09-04 Fri 20:52
# 1st try: 1h 01m 49s >> 실패
# Comment: 전형적인 시뮬레이션문제가 아닐까? 개복잡하네..


def solution(n, build_frame):
    board = [[[False] * 2 for _ in range(n+1)]
             for _ in range(n+1)]  # [0]: 기둥, [1]: 보)
    # print(board)

    def validation0(x, y):
        return y == 0 or \
            board[x][y-1][0] or \
            (x - 1 >= 0 and board[x-1][y][1]) or \
            board[x][y][1]

    def validation1(x, y):
        return (y-1 >= 0 and (board[x][y-1][0] or board[x+1][y-1][0])) or \
            (x-1 >= 0 and x+1 <= n and board[x-1][y][1] and board[x+1][y][1])

    for x, y, a, b in build_frame:
        # print(x,y,a,b)
        if b == 0:
            if a == 0:  # 기둥[0]
                board[x][y][a] = False
                board[x][y][a] = not(validation0(
                    x, y+1) and validation1(x-1, y+1) and validation1(x, y+1))
                # print(f"({x}, {y}) 기둥이 삭제되었습니다")
            else:  # 보[1]
                board[x][y][a] = False
                board[x][y][a] = not(validation0(x, y) and validation0(
                    x+1, y) and validation1(x-1, y) and validation1(x+1, y))

            continue

        if a == 0:  # 기둥[0]
            if validation0(x, y):
                board[x][y][0] = True
                # print(f"({x}, {y}) 기둥이 설치되었습니다")
        else:  # 보[1]
            if validation1(x, y):
                board[x][y][1] = True
                # print(f"({x}, {y}) 보가 설치되었습니다")

    answer = []
    for i in range(0, n+1):
        for j in range(0, n+1):
            for k in range(2):
                if board[i][j][k]:
                    answer.append([i, j, k])

    # print(answer)

    return answer
