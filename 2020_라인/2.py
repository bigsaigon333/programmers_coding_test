from collections import deque


def solution(ball, order):
    answer = []

    q = ball
    head = 0
    tail = len(ball)

    for i in range(len(ball)):
        q[i] = ball[i]

    def q_size():
        return tail-head

    def q_append(x):
        nonlocal tail
        q[tail] = x
        tail += 1

    def q_popleft():
        nonlocal head
        if q_size() > 0:
            head += 1
            return q[head+1]
        else:
            return None

    def q_pop():
        nonlocal tail
        if q_size() > 0:
            tail -= 1
            return q[tail]
        else:
            return None

    def q_front():
        return q[head]

    def q_end():
        return q[tail-1]

    d = dict()
    d.setdefault(q_front(), False)
    d.setdefault(q_end(), False)

    for o in order:

        d.setdefault(o, False)
        d[o] = True

        while (d[q_front()] or d[q_end()]):
            try:
                print(d.items(), q_front(), q_end())
                if d[q_front()]:
                    d[q_front()] = False
                    answer.append(q_popleft())
                elif d[q_end()]:
                    d[q_end()] = False
                    answer.append(q_pop())

                d.setdefault(q_front(), False)
                d.setdefault(q_end(), False)
            except:
                continue

    return answer


# print(solution([1,2,3,4,5,6], [6,2,5,1,4,3]))
# print(solution([11, 2, 9, 13, 24], [9, 2, 13, 24, 11]))

print(solution([1, 2, 3, 4, 5, 6], [3,4,2,5,1,6]))