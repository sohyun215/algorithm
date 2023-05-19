def solution(s):
    cnt_x = 0
    cnt_other = 0
    li = []
    string = ''
    for idx in range(len(s)):
        if cnt_x == 0:
            x = s[idx]
        if s[idx] == x:
            cnt_x += 1
        else:
            cnt_other += 1
        string += s[idx]
        if cnt_x == cnt_other or idx == len(s)-1:
            li.append(string)
            string = ''
            cnt_other = 0
            cnt_x = 0
    return len(li)