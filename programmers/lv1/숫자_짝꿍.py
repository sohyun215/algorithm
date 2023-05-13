from collections import Counter
def solution(X, Y):
    answer = ''
    cntX = Counter(X)
    cntY = Counter(Y)

    for i in range(9, -1, -1):
        answer += str(i) * min(cntX[str(i)], cntY[str(i)])
    if answer == '':
        return '-1'
    elif answer[0] == '0':
        return '0'
    return answer
# 공통된 숫자가 0으로만 구성되어 있을 때 answer[0]이 0인지 확인한다.
# int(answer) == 0 으로 확인했을 때 시간초과 발생함
