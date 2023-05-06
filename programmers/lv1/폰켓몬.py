def solution(nums):
    answer = 0
    pick = len(nums) // 2
    number = set()
    for n in nums:
        if n not in number:
            answer += 1
            number.add(n)
        if pick == len(number):
            break
    
    return answer

# 다른 풀이
def solution(nums):
    return min(len(nums)/2, len(set(nums)))