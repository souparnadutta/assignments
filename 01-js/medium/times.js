/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
    
    let sum =0;
    let startTime1=performance.now()
 
    for(let i=1;i<n;i++)
    {
    sum+=i;
    }
    endTime1=performance.now()
    let Time1=endTime1-startTime1

    /*sum=0
    let startTime2=performance.now()
    for(let i=1;i<100000;i++)
    {
    sum+=i;
    }

    endTime2=performance.now()
    let Time2=endTime1-startTime1

    sum=0
    let startTime3=performance.now()
    for(let i=1;i<1000000000;i++)
    {
    sum+=i;
    }

    endTime3=performance.now()
    let Time3=endTime1-startTime1

*/

    console.log(Time1)
}

calculateTime(1000000000)