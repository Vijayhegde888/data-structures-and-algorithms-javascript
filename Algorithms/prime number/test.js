const n=13
const isPrime=(n)=>{

    for(i=2;i<Math.sqrt(n);i++){
        if(n%i == 0)
        return false
        else
        return true
    }
}

console.log(isPrime(n))