def solution(s):
    s = s.split(' ')
    str_list = []
    for word in s:
        new_str = ''
        if word == '':
            str_list.append('')
            continue
        for i in range(len(word)):
            if i == 0 and not word[i].isdigit():
                new_str += word[i].upper()
            else:
                new_str += word[i].lower()
        str_list.append(new_str)
    return ' '.join(str_list)
            