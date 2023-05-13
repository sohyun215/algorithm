def solution(lottos, win_nums):
    win = 0
    zero = lottos.count(0)
    for w in win_nums:
        if w in lottos:
            win += 1
    high = win+zero

    return [7-high if high>=1 else 6, 7-win if win>=1 else 6]