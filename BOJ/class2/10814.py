import sys
input = sys.stdin.readline
n = int(input())
member_dict = {}
for _ in range(n):
  member = input().split()
  member[0] = int(member[0])
  if member[0] in member_dict:
    member_dict[member[0]].append(member[1])
  else:
    member_dict[member[0]] = [member[1]]

member_dict = sorted(member_dict.items(), key=lambda x:x[0])
for age, member in member_dict:
  for m in member:
    print(age ,m)

