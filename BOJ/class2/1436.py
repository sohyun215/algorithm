n = int(input())
cnt = 0
end_num = 666
while True:
    idx = str(end_num).find("666")
    if idx != -1:
        cnt += 1
    if cnt == n:
        break
    end_num += 1
print(end_num)