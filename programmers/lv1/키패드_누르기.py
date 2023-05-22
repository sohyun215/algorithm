def solution(numbers, hand):
    answer = ''
    numbers = [10 if n==0 else n-1 for n in numbers]
    l, r = 9, 11
    LEFT = [0, 3, 6]
    RIGHT = [2, 5, 8]
    for n in numbers:
        if n in LEFT:
            answer += 'L'
            l = n
        elif n in RIGHT:
            answer += 'R'
            r = n
        else:
            l_diff = abs(n//3-l//3)+1
            r_diff = abs(n//3-r//3)+1
            if l%3 == 1:
                l_diff -= 1
            if r%3 == 1:
                r_diff -= 1
            if l_diff < r_diff:
                answer += 'L'
                l = n
            elif l_diff > r_diff:
                answer += 'R'
                r = n
            else:
                if hand == "right":
                    answer += 'R'
                    r = n
                else:
                    answer += 'L'
                    l = n
    return answer