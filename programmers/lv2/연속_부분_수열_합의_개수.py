def solution(elements):
    answer = set()

    for i in range(len(elements)):
        t = [elements[i]]
        cnt = 0
        while cnt != len(elements)-1:
            i += 1
            t.append(t[-1]+elements[i%len(elements)])
            cnt += 1
        answer.update(t)
    
    return len(answer)
