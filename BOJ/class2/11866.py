n, k = map(int, input().split())
arr = [i+1 for i in range(n)]
i = 0
removed = []
while len(arr)>0:
    i = ((i+k)-1)%len(arr)
    removed.append(arr.pop(i))

if len(removed) == 1:
    print(f"<{removed[0]}>")
else:
    for i in range(len(removed)):
        if i == 0:
            print(f"<{removed[i]}", end=", ")
        elif i == len(removed)-1:
            print(f"{removed[i]}>")
        else:
            print(f"{removed[i]}", end=", ")


# 출력과 pop 한번에
n, k = map(int, input().split())
arr = [i+1 for i in range(n)]
i = 0
removed = []
print("<", end='')
while len(arr)>1:
    i = ((i+k)-1)%len(arr)
    print(arr.pop(i), end=", ")
print(arr.pop(), end=">")