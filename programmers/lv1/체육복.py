def solution(n, lost, reserve):
    common = set()
    for l in lost:
        if l in reserve:
            common.add(l)  
    lost = [i for i in lost if i not in common]
    reserve = [i for i in reserve if i not in common]
    answer = n-len(lost)        
    lost.sort()
    for l in lost:
        if l-1 in reserve:
            reserve.remove(l-1)
            answer += 1
        elif l+1 in reserve:
            reserve.remove(l+1)
            answer += 1
    return answer