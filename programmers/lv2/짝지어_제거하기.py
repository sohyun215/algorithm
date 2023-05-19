def solution(s):
    st = []
    for ss in s:
        if len(st) > 0 and st[-1] == ss:
            st.pop()
        else:
            st.append(ss)
    return 1 if len(st) == 0 else 0