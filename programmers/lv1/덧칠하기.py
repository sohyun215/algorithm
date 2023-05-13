def solution(n, m, section):
    answer = 0
    painted = [1] * n
    for s in section:
        painted[s-1] = 0
        
    while painted.count(0):
        for i in range(len(painted)):
            if not painted[i]:
                painted[i:i+m] = [1] * m
                answer += 1
                
    return answer
