def solution(k, score):
    answer = []
    top_score = []
    for s in score:
        if k > len(top_score):
            top_score.append(s)
        else:
            if s > top_score[-1]:
                top_score.pop()
                top_score.append(s)
        top_score.sort(reverse=True)
        answer.append(min(top_score))
    return answer

# 다른 풀이
def solution(k, score):
    answer = []
    top_score = []
    for s in score:
        top_score.append(s)
        if len(top_score) > k:
            top_score.remove(min(top_score))
        answer.append(min(top_score))
    return answer