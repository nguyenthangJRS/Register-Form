function placeOfCovidQuarantine(rooms, groups, entrance) {
    let entranceRoom = []
    let a = 0
    let b = 0
    let c = 0
    let d = 0
    let count1 = 0
    let count2 = 0
        while(groups.length <= 0){
            for(let i = entrance;i > 0; i--){
                            count1++;
                            if(groups[0] == rooms[i]){
                               if(a==0){
                                    a = count1
                               }else{
                                   continue
                               }
                            } if(groups[0] < rooms[i]){
                                if(b = 0){
                                    b = count1
                                }else{
                                    continue
                                }
                            }
                 for(let j = entrance;j < rooms.length; j++){
                             count2++;
                            if(groups[0] == rooms[j]){
                               if(c==0){
                                    c = count2
                               }else{
                                   continue
                               }
                            }else if(groups[0] < rooms[j]){
                                if(d = 0){
                                    d = count2
                                }else{
                                    continue
                                }
                            }
                     if((c == d) && (c == 0)){
                         if((a !== 0 ) && (b !== 0)){
                             if(a <= b){
                                entranceRoom.push(a)
                                rooms[entrance - a] = null
                                break
                             }else{
                                 entranceRoom.push(b)
                                rooms[entrance + b - 1] = null
                                break
                             }
                             
                          }else{
                              entranceRoom.push(-1)
                              break
                          }
                          
                        }
                        if((a == b) && (a == 0)){
                            if((a !== 0 ) && (b !== 0)){
                             if(c <= d){
                                entranceRoom.push(c)
                                rooms[entrance - c] = null
                                break
                             }else{
                                 entranceRoom.push(d)
                                rooms[entrance + d - 1] = null
                                break
                             }
                             
                          }else{
                              entranceRoom.push(-1)
                              break
                          }
                        }
                    }
                }
            groups--;
        }
    return entranceRoom
}
let x = placeOfCovidQuarantine([1, 3, 2, 2],[1, 1, 3, 2, 1],2)
console.log(x)