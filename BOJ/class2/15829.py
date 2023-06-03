l = int(input())
s = input()
alpha = {chr(ord('a')+i):i+1 for i in range(26)}
answer = 0
for i in range(l):
    answer += alpha[s[i]]*(31**i)
print(answer%1234567891)