function solution(dots) {
    var answer = 0;

    function 기울기(a,b){
        return (b[1]-a[1])/(b[0]-a[0])
    }
    
    let arr = [
        [[0,1],[2,3]],
        [[0,2],[1,3]],
        [[0,3],[1,2]],
    ]
    for(let [[a,b],[c,d]] of arr){
        (기울기(dots[a],dots[b]) === 기울기(dots[c],dots[d]))  ?          answer = 1 : ''       
    }
return answer;
}