import re
def solution(new_id):
    answer = ''
    possible = {'-', '_', '.'}
    for id in new_id:
        if id.isalnum() or id in possible:
            if id.isupper():
                answer += id.lower()
            else:
                answer += id
    answer = re.sub("[\.]{2,}", '.', answer)
    if answer[0] == '.':
        answer = answer[1:]
    if len(answer) > 0 and answer[-1] == '.':
        answer[:-1]
    if len(answer) == 0:
        answer += 'a'
    if len(answer) >= 16:
        answer = answer[:15]
    if answer[-1] == '.': 
        answer = answer[:-1]
    if len(answer) <= 2:
        while len(answer) != 3:
            answer += answer[-1]
    return answer