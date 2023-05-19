def solution(participant, completion):
    answer = ''
    participants = {}
    for p in participant:
        if p in participants:
            participants[p] += 1
        else: 
            participants[p] = 1
    for c in completion:
        participants[c] -=1
    for k, v in participants.items():
        if v != 0:
            answer = k
    return answer