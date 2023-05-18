T = int(input())
for i in range(T):
  k, n = int(input()), int(input())
  home = [[0]*14 for _ in range(k+1)]
  for i in range(14):
    home[0][i] = i+1
  for i in range(1, k+1):
    for j in range(14):
      home[i][j] += home[i-1][j] + home[i][j-1]
  print(home[k][n-1])