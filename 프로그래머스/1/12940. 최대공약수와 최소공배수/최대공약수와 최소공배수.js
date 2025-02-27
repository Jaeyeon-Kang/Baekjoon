function solution(n, m) {
    const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
    const gcds = gcd(n,m)
    const lcms = (n*m)/gcds
    
    return [gcds, lcms];
}