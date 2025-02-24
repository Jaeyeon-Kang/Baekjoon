function solution(A,B){
    var answer = 0;
    
    let aSort = A.sort((a,b)=> a-b) 
    let bSort = B.sort((a,b)=> b-a)
    for (let i=0; i<aSort.length; i++){
        answer += aSort[i] * bSort[i]
    }
    return answer;
}