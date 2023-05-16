def solution(s):
    n = list(map(int,s.split(" ")))
    return f'{min(n)} {max(n)}'