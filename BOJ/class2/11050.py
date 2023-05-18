n, k = map(int, input().split())
m = 1
c = 1 
for i in range(k):
  m *= k
  c *= n
  k -= 1
  n -= 1
print(c // m) 

# itertools
from itertools import combinations
n, k = map(int, input().split())
print(len(list(combinations(range(n), k))))