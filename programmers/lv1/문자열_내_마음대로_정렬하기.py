def solution(strings, n):
    for i in range(len(strings) - 1):
        for j in range(i + 1, len(strings)):
            if strings[i][n] > strings[j][n]:
                strings[i], strings[j] = strings[j], strings[i]
            elif strings[i][n] == strings[j][n]:
                if strings[i] > strings[j]:
                    strings[i], strings[j] = strings[j], strings[i]
                    
    return strings