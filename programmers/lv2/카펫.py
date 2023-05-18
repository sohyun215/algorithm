def solution(brown, yellow):
    for h in range(3, brown//2):
        for w in range(3, brown//2):
            if w*h == brown+yellow and w+h == (brown//2)+2:
                return [w, h]