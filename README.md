 Programmers 코딩테스트 연습 풀이모음
 ====================================

Programmers 코딩테스트 연습문제들을 직접 풀고 난 소스코드들의 모임입니다.
1 commit a day 를 추구하고 있습니다

# 신장 트리
주어진 방향성이 없는 그래프의 서브그래프(Subgraph)들 중에서 모든 정점을 포함하는 트리.
트리의 성질로부터 주어진 그래프의 정점이 VV개일 때 신장 트리는 V-1V−1개의 간선을 가지고 있음.
그리고 상식적으로 생각했을 때 주어진 그래프가 연결 그래프일 때만 신장 트리가 존재함.
 
# 완전 그래프・연결 그래프
![완전 그래프・연결 그래프 예시 그림](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FXYpw9%2FbtqAEsgnzpJ%2FWrjU4v3nwJfFPX4nwoHn50%2Fimg.png)
1. 완전 그래프: 모든 서로 다른 두 정점 쌍이 간선으로 연결된 그래프를 완전 그래프(Complete Graph)
2. 연결 그래프: 임의의 두 정점 사이에 경로가 존재하는 그래프(Connected Graph)

# 공간복잡도: 512MB = 1.2억개의 int
 메모리 제한이 512MB일 때 int 변수를 대략 1.2억개 정도 선언할 수 있다는 것을 기억해두시는게 좋습니다. 이건 int 1개가 4바이트라는 것을 이용해 계산가능