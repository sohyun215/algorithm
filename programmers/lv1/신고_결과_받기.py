def solution(id_list, report, k):
    answer = []
    report_dict = {i:[] for i in id_list}
    blocked_dict = {i:0 for i in id_list}
    for r in report:
        f, t = r.split()
        if t not in report_dict[f]:
            report_dict[f].append(t)
            blocked_dict[t] += 1
    for key, value in report_dict.items():
        cnt = 0
        for t in value:
            if blocked_dict[t] >= k:
                cnt += 1
        answer.append(cnt)
    return answer