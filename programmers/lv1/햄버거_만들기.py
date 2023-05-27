def solution(ingredient):
    answer = 0
    st = []
    for i in ingredient:
        st.append(i)
        if i == 1 and len(st) >= 4:
            if st[-4:-1] == [1,2,3]:
                for _ in range(4):
                    st.pop()
                answer += 1
    return answer