def solution(n, words):
    word = set([words[0]])
    num = 0
    order = 0
    for i in range(1, len(words)):
        if words[i] in word or words[i][0] != words[i-1][-1]:
            num = i % n + 1
            order = i // n + 1
            break
        else:
            word.add(words[i])
    return [num, order]