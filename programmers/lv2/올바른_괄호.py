def solution(s):
    st = []
    for p in s:
        if p == ')':
            if len(st) == 0 or st.pop() != '(':
                return False
        else:
            st.append(p)
    
    return True if len(st) == 0 else False