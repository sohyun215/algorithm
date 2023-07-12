def solution(n, left, right):
    arr = []
    r_row, r_col = right // n, right % n
    l_row, l_col = left // n, left % n

    for i in range(l_row, r_row+1):
        for j in range(n):
            if i == l_row:
                if j < l_col:
                    continue
            if i <= j:
                arr.append(j+1)
            else:
                arr.append(i+1)
            if i == r_row and j == r_col:
                return arr
