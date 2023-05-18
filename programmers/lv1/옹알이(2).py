def solution(babbling):
    answer = 0
    o = ['aya', 'ye', 'woo', 'ma']
    con = ['ayaaya', 'yeye', 'woowoo', 'mama']
    for b in babbling:
        for i,j in zip(o, con):
            if j not in b:
                b = b.replace(i, '*')
        if b.count('*') == len(b):
            answer += 1
    return answer