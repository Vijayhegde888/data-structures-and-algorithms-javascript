// given a sorted array of n elements and a target 't' find the index of 't' in the array.
// return -1 If the target element is not found !
// arr=[-5,2,4,10,16], t=10 should return 4

const arr=[-5,2,4,10,16];
let t= 10;

const binarySearch=(arr,t)=>{
// find the middle element first 

let leftIndex=0;
let rightIndex=arr.length-1;


while(leftIndex <= rightIndex){
    // find middle element  
let mid= Math.floor((leftIndex +rightIndex)/2)
if(arr[mid] === t){
    return mid;
}
    else if(t>arr[mid]){
        leftIndex=mid+1
       
    }
    else{

        rightIndex=mid-1
       
    }
    }
    return -1
}

const result=binarySearch(arr,t);

console.log('result', result)