function solution(n) {
     if (n < 2) return 0;

    let isPrime = new Array(n + 1).fill(true);  // 모든 수를 소수로 가정
    isPrime[0] = isPrime[1] = false;  // 0과 1은 소수가 아님

    for (let i = 2; i * i <= n; i++) {
        if (isPrime[i]) {  // i가 소수라면
            for (let j = i * i; j <= n; j += i) {  // i의 배수들을 모두 제거
                isPrime[j] = false;
            }
        }
    }

    return isPrime.filter(v => v).length;  // 남아있는 소수 개수 세기
    
}