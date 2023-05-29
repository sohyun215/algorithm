def solution(players, callings):
    rtn = {}    # rank to name
    ntr = {}    # name to rank
    for idx, player in enumerate(players):
        rtn[idx+1] = player
        ntr[player] = idx+1
        
    for calling in callings:
        ntr[calling] -= 1
        overtaken = rtn[ntr[calling]]
        ntr[overtaken] += 1
        rtn[ntr[calling]] = calling
        rtn[ntr[calling]+1] = overtaken

    return list(rtn.values())

  
# dict 하나만 사용해서 players swap
def solution(players, callings):
    player_dict = {}
    for idx, player in enumerate(players):
        player_dict[player] = idx
        
    for calling in callings:
        cur_idx = player_dict[calling]
        player_dict[calling] -= 1
        player_dict[players[cur_idx-1]] += 1
        players[cur_idx-1], players[cur_idx] = players[cur_idx], players[cur_idx-1]
        
    return players
    