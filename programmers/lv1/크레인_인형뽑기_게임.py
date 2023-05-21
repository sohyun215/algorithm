def solution(board, moves):
    answer = 0
    st = []
    for m in moves:
        i = 0
        while board[i][m-1] == 0:
            i += 1
            if i == len(board)-1:
                break
        if board[i][m-1] == 0:
            continue
        if len(st) > 0 and st[-1] == board[i][m-1]:
            st.pop()
            answer += 2
        else:
            st.append(board[i][m-1])
        board[i][m-1] = 0
    return answer