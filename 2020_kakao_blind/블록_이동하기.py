# Date: 2020-09-07 Mon 17:42
# 1st try: 1h 5m 14s >> 실패
# Comment: 사소한 구현에 너무 집착하지 말고 큰 틀을 보자. 또한, 어떻게 깔끔하게 구현을 할지 잘 생각해보자.
# https://velog.io/@so-soon/2020-KAKAO-BLIND-RECRUITMENT-%EB%B8%94%EB%A1%9D-%EC%9D%B4%EB%8F%99%ED%95%98%EA%B8%B0
# 해설을 보니 로봇의 현재위치 표현을 (r,c,d) 형태로 표현했습니다 ( r,c에 한 블록, r,c에서 d방향으로 한 블록)


from collections import deque


def solution(board):
    N = len(board)
    dist = [[[[-1 for _ in range(N)] for _ in range(N)]for _ in range(N)]for _ in range(N)]
    # dist = {}
    # print(dist)

    q = deque()
    q.append((0, 0, 0, 1))
    dist[0][0][0][1] = 0
    # dist[0][1][0][0] = 0
    # print(q)

    d1 = ((0, 1, 0, 1), (0, -1, 0, -1), (-1, 0, -1, 0),  (1, 0, 1, 0),
         (1, 1, 0, 0), (0, 0, 1, -1), (-1, 1, 0, 0), (0, 0, -1, -1))

    d2 = ((1, 0, 1,0), ( -1, 0, -1,0), (0, 1, 0,1),  (0, -1, 0,-1),
         (1, 1, 0, 0), (0, 0, 1, -1), (0, 0,-1,-1), (1, -1, 0, 0))

    def isInside(x):
        return 0 <= x < N

    while q:

        curr = q.popleft()
        x1, y1, x2, y2 = curr
        print("curr: ", x1,y1,x2,y2)

        if x1 == x2 :
          d = d1
        elif y1 == y2 :
          d = d2
        else :
          raise RuntimeError("Unacceptable current position", curr, x1,y1,x2,y2)
          

        for dx1, dy1, dx2, dy2 in d:
            nx1 = x1 + dx1
            ny1 = y1 + dy1
            nx2 = x2 + dx2
            ny2 = y2 + dy2

            if d == d1 :
              if ny1 > ny2 :
                ny1, ny2 = ny2, ny1
            elif d == d2 :
              if nx1 > nx2 :
                nx1, nx2 = nx2, nx1

            # nx1,nx2 = max(nx1,nx2), min(nx1,nx2)
            # ny1,ny2 =  min(ny1,ny2), max(ny1,ny2)
            

            if not (isInside(nx1) and isInside(ny1) and isInside(nx2) and isInside(ny2)):
                continue

            if board[nx1][ny1] == 1 or board[nx2][ny2] == 1:
              continue

            nxt = (nx1, ny1, nx2, ny2)
            if dist[nx1][ny1][nx2][ny2]== -1 or dist[nx1][ny1][nx2][ny2] > dist[x1][y1][x2][y2] + 1:
                dist[nx1][ny1][nx2][ny2] = dist[x1][y1][x2][y2] + 1
                # dist[nx2][ny2][nx1][ny1] = dist[x1][y1][x2][y2] + 1

                q.append(nxt)
                print(curr, nxt, dx1,dy1,dx2,dy2)
        print(q)

  

    return -1


print(solution([[0, 0, 0, 1, 1], [0, 0, 0, 1, 0], [0, 1, 0, 1, 1], [1, 1, 0, 0, 1], [0, 0, 0, 0, 0]]))
