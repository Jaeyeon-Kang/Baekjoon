function solution(babbling) {
    var answer = 0;

    let reg = /^(aya|ye|woo|ma)+$/
    for (let x of babbling){
        reg.test(x) ? answer++ : ''
    }
    return answer;
}