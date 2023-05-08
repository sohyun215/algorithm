def solution(N, stages):
    answer = []
    for i in range(N):
        l = len([j for j in stages if i+1 <= j])
        if l==0:
            answer.append(0)
        else:
            answer.append(stages.count(i+1)/l)
    answer = sorted(range(len(answer)), key=lambda x:answer[x], reverse=True)
    for i in range(len(answer)):
        answer[i] += 1
    return answer


# 다른 풀이 - 스테이지에 도달한 플레이어 수를 줄여나가는 방식
def solution(N, stages):
    answer = []
    arrival = len(stages)
    for i in range(N):
        cnt = stages.count(i+1)
        if arrival==0:
            answer.append(0)
        else:
            answer.append(cnt/arrival)
        arrival -= cnt
    answer = sorted(range(len(answer)), key=lambda x:answer[x], reverse=True)
    for i in range(len(answer)):
        answer[i] += 1
    return answer