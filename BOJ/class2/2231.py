n = int(input())
answer = 0
for i in range(n):
  s = 0
  num = i 
  s += num
  while num:
    s += num % 10
    num //= 10
  if s == n:
    answer = i
    break
print(answer)


# 자릿수 합 더하기 다른 방법
n = int(input())
answer = 0
for i in range(n):
  num = list(map(int, str(i)))
  if sum(num) + i == n:
    answer = i
    break
print(answer)