def solution(a, b):
    answer = ''
    m = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    d = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"]
    days = sum(m[:a-1]) + b - 1
    return d[days % 7]