// Calculate the time it takes between a setTimeout call and the inner function actually running 

console.log("Start time: ",performance.now())

setTimeout(()=>{
for(let i=0;i<1000000;i++)
{
    continue;
}
console.log("inner function time taken ",performance.now())
},5000)

console.log("Time taken by setTimeout(): ",performance.now())