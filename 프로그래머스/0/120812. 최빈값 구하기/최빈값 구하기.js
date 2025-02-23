function solution(array) {
    let answer = 0;
    let map = new Map()
    for(let i=0; i<array.length; i++){
        if(!map.has(array[i])){
            map.set(array[i], 1)
        } else {
            map.set(array[i], map.get(array[i])+1)
        }
    }

    let cnt = 0
    for(let [key, val] of map){      
       if (val > cnt) {
            answer = key            
            cnt = val
        } else if(val === cnt) {             
            answer = -1
        }        
    }
    return answer; 
}