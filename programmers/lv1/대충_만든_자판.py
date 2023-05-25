def solution(keymap, targets):
    answer = []
    for target in targets:
        cnt = 0
        for t in target:
            key = []
            for k in keymap:
                if k.find(t) != -1:
                    key.append(k.find(t)+1)
            if len(key) > 0:
                cnt += min(key)
            else:
                cnt = -1
                break
        answer.append(cnt)
    return answer