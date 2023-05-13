def solution(s):
    answer = [0, 0]

    while s != '1':
        zero = s.count('0')
        s = s.replace('0','', zero)
        s = bin(len(s))[2:]
        answer[0] += 1
        answer[1] += zero

    return answer