def solution(d, budget):
    answer = 0
    s = 0
    d.sort()
    for i in d:
        if budget < s + i:
            break
        s += i
        answer += 1
    return answer