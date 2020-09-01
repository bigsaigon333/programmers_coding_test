# Date: 2020-09-01 Tue 23:25
# 1st try: 28m 02s >> 통과
# Comment: 스택, 큐 등의 자료구조를 python에서 다루는 법이 아직 서툴다.. 정진!


from collections import deque


def solution(board, moves):
    count = 0
    s = deque()

    board = [list(filter(lambda x: x != 0, line)) for line in zip(*board)]

    for line in board:
        line.reverse()

    # print(board)

    for i in moves:
        i -= 1
        if len(board[i]) == 0:
            continue

        item = board[i].pop()

        if s and s[-1] == item:
            count += 2
            s.pop()
        else:
            s.append(item)

    return count
