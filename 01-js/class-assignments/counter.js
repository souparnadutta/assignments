

function counter(n) {
    return setInterval(() => {
      console.log(n--);
  
      if (n < 0) {
        clearInterval(intervalID);
      }
    }, 1000);
  }

const intervalID=counter(5) 

