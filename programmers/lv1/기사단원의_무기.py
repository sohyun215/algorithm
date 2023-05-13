def solution(number, limit, power):
    answer = 0
    for n in range(1, number+1):
        cnt = 0
        for i in range(1, int(n**0.5) + 1):
            if i*i == n:
                cnt += 1
            elif n % i == 0: 
                cnt += 2
        if cnt > limit:
            answer += power
        else:
            answer += cnt
    return answer