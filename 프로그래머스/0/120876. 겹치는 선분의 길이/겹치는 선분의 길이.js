function solution(lines) {
    function len1(x,y){
        let [a,b]=x
        let [c,d]=y
        let first = a>c ? a : c
        let second = b<d ? b:d
        // console.log(first, second)
        let cnt = (first<second) ? second-first : 0
        return cnt
    }
    
    function len2(x,y,z){
        let [a,b]=x
        let [c,d]=y
        let [e,f]=z
        let max = Math.max(a,c,e)
        let min=Math.min(b,d,f)
        console.log(max, min)
        if(max < min) return (min-max)
    }
    
    let [a,b,c]=lines
    if(len2(a,b,c)) return len1(a,b)+len1(b,c)+len1(a,c)-len2(a,b,c)*2
    else return len1(a,b)+len1(b,c)+len1(a,c)
}