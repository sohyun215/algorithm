def solution(dartResult):
    cnt = 0
    i = 0
    bonus_dict = {'S':1, 'D':2, 'T':3}
    score_list = [0] * 3
    while cnt != 3:
        if i+2 <= len(dartResult):
            if dartResult[i+1].isdigit():
                score = 10
                bonus = dartResult[i+2]
                i += 3
            else:
                [score, bonus] = dartResult[i:i+2]
                i += 2
            score_list[cnt] = int(score)**bonus_dict[bonus]
            
        if i < len(dartResult):
            if not dartResult[i].isdigit():
                if dartResult[i] == "*":
                    score_list[cnt] *= 2
                    if cnt-1 >= 0:
                        score_list[cnt-1] *= 2
                else:
                    score_list[cnt] *= -1 
                i += 1
        cnt += 1
        
    return sum(score_list)