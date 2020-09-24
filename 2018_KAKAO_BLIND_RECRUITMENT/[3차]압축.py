# Date: 2020-09-24 Thu 20:53
# 36m 08s >> 통과
# Comment: 문제에 주어진 그대로 구현만 하면 되는건데 오랜만에 파이썬을 해서 그런지 문법에서 계속 막혔다.
# 계속 공들여서 하지 않으면 금방 휘발되어 버리는 것. A Rolling stone gathers no moss

import string

def solution(msg):
    answer = []

    d = ["_"] + list(string.ascii_uppercase)

    curr = 0
    while curr < len(msg):
        end = curr+1
        print(curr, end)
        while end <= len(msg):
            w = msg[curr:end]
            try:
                idx = d.index(w)
                end += 1
                continue
            except:
                print(w[:-1], idx)
                answer.append(idx)
                d.append(w)
                break
        else:
            answer.append(idx)


        curr = end-1

    return answer


print(solution("KAKAO"))
