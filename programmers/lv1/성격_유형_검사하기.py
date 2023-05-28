def solution(survey, choices):
    answer = ''
    p = {'R':0, 'T':0, 'C':0, 'F':0, 'J':0, 'M':0, 'A':0, 'N':0}
    for i in range(len(survey)):
        j = 0 if choices[i]-4 < 0 else 1
        p[survey[i][j]] += abs(choices[i]-4)
    answer += 'T' if p['R'] < p['T'] else 'R'
    answer += 'F' if p['C'] < p['F'] else 'C'
    answer += 'M' if p['J'] < p['M'] else 'J'
    answer += 'N' if p['A'] < p['N'] else 'A'
    return answer