def solution(s, skip, index):
    answer = ''
    for ss in s:
        i = 1
        nxt = []
        while len(nxt) != index:
            next_alphabet = chr(ord('a')+(ord(ss)-ord('a')+i)%26)
            if next_alphabet not in skip:
                nxt.append(next_alphabet)
            i += 1
        answer += nxt[-1]
    return answer