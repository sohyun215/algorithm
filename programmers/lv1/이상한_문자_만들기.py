def solution(s):
    answer = ''
    str_list = s.split(' ')
    for word in str_list:
        for i in range(len(word)):
            if i % 2 == 0:
                answer += word[i].upper()
            else:
                answer += word[i].lower()
        answer += ' '
    answer = answer[:-1]
    return answer