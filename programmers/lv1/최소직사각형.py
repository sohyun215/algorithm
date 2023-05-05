def solution(sizes):
    a = []
    b = []
    for s in sizes:
        s.sort()
        a.append(s[0])
        b.append(s[1])
    return max(a) * max(b)