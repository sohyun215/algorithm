def solution(n):
    answer = 1
    for i in range(1, n+1):
        j = i+1
        s = i+j
        while s < n:
            j += 1
            s += j
        if s == n:
            answer += 1
    return answer