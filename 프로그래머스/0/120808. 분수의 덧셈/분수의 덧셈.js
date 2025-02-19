function solution(numer1, denom1, numer2, denom2) {
      function maxDivided(a,b){
          let c=0
            while(b>0){   
                c=a%b 
                a=b
                b=c            
            }
          return a
       }
    
 
    let a = denom2*numer1 + denom1*numer2
    let b =  denom1 * denom2
    let max = maxDivided(a,b)
    console.log(a, b, max)
    return [(a/max), (b/max)]
 
}