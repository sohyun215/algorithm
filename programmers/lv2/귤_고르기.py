def solution(k, tangerine):
    answer = 0
    t_dict = {}
    for t in tangerine:
        if t in t_dict:
            t_dict[t] += 1
        else:
            t_dict[t] = 1
    sorted_t = sorted(t_dict.items(), key=lambda x: x[1], reverse=True)
    cnt = 0
    for key, value in sorted_t:
        cnt += value
        answer += 1
        if k <= cnt:
            return answer