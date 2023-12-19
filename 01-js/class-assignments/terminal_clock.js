// Create a terminal Clock (HH : MM : SS)

let currentDate= new Date()

let hours = currentDate.getHours()
let minutes = currentDate.getMinutes()
let seconds = currentDate.getSeconds()

console.log(hours+":"+minutes+":"+seconds)