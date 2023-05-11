# 어떤 cards에 있는지 확인 후 그 cards에서의 인덱스와 전에 나온 인덱스와 비교
def solution(cards1, cards2, goal):
    idx1 = -1
    idx2 = -1
    for card in goal:
        if card in cards1:
            if idx1 != cards1.index(card)-1:
                return "No"
            idx1 = cards1.index(card)
        if card in cards2:
            if idx2 != cards2.index(card)-1:
                return "No"
            idx2 = cards2.index(card)
    
    return "Yes"


# cards에서 제일 첫 번째 요소와 비교
def solution(cards1, cards2, goal):
    for card in goal:
        if len(cards1) > 0 and card == cards1[0]:
            cards1.pop(0)
        elif len(cards2) > 0 and card == cards2[0]:
            cards2.pop(0)
        else:
            return "No"
    return "Yes"