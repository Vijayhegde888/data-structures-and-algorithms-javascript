// find the index of 't' in the array 
// arr=[-5,2,10,4,6], t=10 should return 2

const arr=[-5,2,10,4,6];
let t= 10;

const linearSearch=(arr,t)=>{
arr.forEach((ele,index) => {
    if(ele  == t){
        console.log(index)
    }
});
}
linearSearch(arr,t)