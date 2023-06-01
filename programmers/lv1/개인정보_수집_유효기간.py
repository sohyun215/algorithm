def solution(today, terms, privacies):
    answer = []
    t_y, t_m, t_d = map(int, today.split("."))
    term = {}
    for t in terms:
        s = t.split()
        term[s[0]] = int(s[1])
    for i in range(len(privacies)):
        date, t = privacies[i].split()
        y, m, d = map(int, date.split("."))
        if d-1 == 0:
            m += term[t]-1
        else:
            m += term[t]
        d = d-1 if d-1 != 0 else 28
        y += (m//12)-1 if m%12 == 0 else m//12
        m = 12 if m%12 == 0 else m%12

        if t_y > y: 
            answer.append(i+1)
        elif t_y == y:
            if t_m > m:
                answer.append(i+1)
            elif t_m == m:
                if t_d > d:
                    answer.append(i+1)
    return answer


# 풀이2 
def solution(today, terms, privacies):
    answer = []
    t_y, t_m, t_d = map(int, today.split("."))
    today = t_y * 28 * 12 + t_m * 28 + t_d
    term = {}
    for t in terms:
        s = t.split()
        term[s[0]] = int(s[1]) * 28
    
    for i, privacy in enumerate(privacies):
        date, t = privacies[i].split()
        y, m, d = map(int, date.split("."))
        if y * 28 * 12 + m * 28 + d + term[t] <= today:
            answer.append(i+1)
    return answer