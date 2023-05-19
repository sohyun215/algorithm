n = int(input())
arr = []
answer = []
for _ in range(n):
  [weight, height] = map(int, input().split())
  arr.append((weight, height))

for i in range(n):
  rank = 1
  for j in range(n):
    if i != j and arr[i][0] < arr[j][0] and arr[i][1] < arr[j][1]:
      rank += 1
  answer.append(rank)

for a in answer:
  print(a, end=' ')