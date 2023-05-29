import sys
input = sys.stdin.readline
n = int(input())
q = []
for _ in range(n):
  c = input().split()
  if c[0] == 'push':
    q.append(c[1])
  elif c[0] == 'front':
    print(q[0] if len(q) > 0 else -1)
  elif c[0] == 'back':
    print(q[-1] if len(q) > 0 else -1)
  elif c[0] == 'size':
    print(len(q))
  elif c[0] == 'empty':
    print(1 if len(q) == 0 else 0)
  elif c[0] == 'pop':
    print(q.pop(0) if len(q) > 0 else -1)