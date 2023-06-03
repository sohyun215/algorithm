import sys
input = sys.stdin.readline
m, n = map(int, input().split())
for i in range(m, n+1):
    if i == 1: 
        continue
    is_prime = True
    for j in range(2, int(i**0.5)+1):
        if i % j == 0:
            is_prime = False
            break
    if is_prime == True:
        print(i)


# 풀이2
MAX = 1000000
m, n = map(int, input().split())
prime = [True for _ in range(MAX+1)]
prime[1] = False
l = int(MAX**0.5)+1
for i in range(2, l):
    if prime[i] == True:
        for j in range(i*2, MAX+1, i):
            prime[j] = False
for i in range(m, n+1):
    if prime[i] == True:
        print(i)