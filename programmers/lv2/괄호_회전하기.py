def is_right(s):
    st = []
    for p in s:
        if p == ')':
            if len(st) == 0  or st.pop() != '(':
                return False
        elif p == ']':
            if len(st) == 0 or st.pop() != '[':
                return False
        elif p == '}':
            if len(st) == 0 or st.pop() != '{':
                return False
        else:
            st.append(p)
    return True if len(st) == 0 else False
                
    
def solution(s):
    answer = 0
    s = [i for i in s]

    for i in range(len(s)):
        if is_right(s):
            answer += 1
        s.append(s.pop(0))
    return answer