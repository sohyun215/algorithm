while True:
  n = input()
  if n == '0': 
    break
  answer = 'yes'
  for i in range(len(n)//2):
    if n[i] != n[-1-i]:
      answer = 'no'
  print(answer)