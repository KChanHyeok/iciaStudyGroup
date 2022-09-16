solution(121)

function solution(n) {
    var answer = 0;
    for(let i=1; i<=n; i++){
        if (i ** 2 == n) {
            return console.log(answer = (i+1)**2)
        } 
    }
    return console.log(answer = -1)
}

