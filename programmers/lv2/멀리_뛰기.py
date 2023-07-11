from math import factorial

def solution(n):
    answer = 0
    ran = n // 2
    for i in range(ran+1):
        cnt_1 = n - (2*i)
        cnt_total = cnt_1 + i
        answer += factorial(cnt_total) // (factorial(cnt_1)*factorial(i))
    return answer % 1234567



# 다른 풀이
def solution(n):
    if n == 1:
        return 1
    ans = [1] * n
    ans[1] = 2
    for i in range(2, n):
        ans[i] = ans[i-1] + ans[i-2]
    return ans[n-1] % 1234567