def solution(park, routes):
    dx = {'N': -1, 'S': 1, 'W': 0, 'E': 0}
    dy = {'N': 0, 'S': 0, 'W': -1, 'E': 1}
    for i in range(len(park)):
        for j in range(len(park[0])):
            if park[i][j] == 'S':
                x, y = i, j
    for route in routes:
        [op, n] = route.split()
        nx, ny = x, y
        ignore = False
        for _ in range(int(n)):
            nx += dx[op]
            ny += dy[op]
            if nx < 0 or ny < 0 or nx >= len(park) or ny >= len(park[0]) or park[nx][ny] == 'X':
                ignore = True
                break
        if ignore:  
            continue
        x, y = nx, ny
    return [x, y]
