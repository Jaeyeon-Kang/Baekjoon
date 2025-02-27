function solution(s) {    
   let arr = []
   for(x of s){
       let [a,b] = [x, x.charCodeAt()]
       arr.push([a,b])
   }
    
    
    return arr.sort((a,b)=>b[1]-a[1]).map(x => x[0]).join('')
}