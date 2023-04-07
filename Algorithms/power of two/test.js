const isPowerOfTwo=(n)=>{
    
    if(n<1){
        return false
    }
    while(n>1){
        if(n%2 !==0 ){
            return false
        }
        n=n/2

    }
    return false;
}
const n=13

console.log(isPowerOfTwo(n))




//optimal solution


isPowerOfTwoOptimised=(n)=>{
   if(n<1){
    return false;
   }
    
    return  (n &( n-1)) ==0
   
}

console.log('16',isPowerOfTwoOptimised(4))