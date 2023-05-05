def to_binary(n, x):
    result = ''
    while x > 0:
        result += str(x % 2)
        x //= 2
    return result[::-1].zfill(n)

def solution(n, arr1, arr2):
    answer = []
    
    for i in range(n):
        password = ''
        for b in to_binary(n, arr1[i] | arr2[i]):
            if b == "1": 
                password += "#"
            else: 
                password += " " 
        answer.append(password)
            
                
    return answer


# bin(), replace 사용
def solution(n, arr1, arr2):
    answer = []
    
    for i in range(n):
        m = bin(arr1[i] | arr2[i])[2:].zfill(n)
        m = m.replace("1", "#")
        m = m.replace("0", " ")
        answer.append(m)
    return answer
