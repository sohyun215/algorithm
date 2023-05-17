n, m = map(int, input().split())
card = list(map(int, input().split()))
s = card[0]+card[1]+card[2]
for i in range(n-2):
  for j in range(i+1, n-1):
    for k in range(j+1, n):
      if card[i]+card[j]+card[k] <= m and m-(card[i]+card[j]+card[k]) <= abs(m-s):
        s = card[i]+card[j]+card[k]
print(s)
  