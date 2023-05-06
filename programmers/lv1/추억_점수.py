def solution(name, yearning, photo):
    answer = []
    s = {}
    for n, y in zip(name, yearning):
        s[n] = y    
    for p in photo:
        score = 0
        for person in p:
            if person in name:
                score += s[person]
        answer.append(score)
    return answer