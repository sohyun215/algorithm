def solution(n):
    i = 0
    n_one = bin(n).count('1')
    while True:
        i += 1
        if n_one == bin(n+i).count('1'):
            return n+i