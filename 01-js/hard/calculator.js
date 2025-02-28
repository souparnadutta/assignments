/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {

  constructor(){
    this.result=0
  }

   add(number){
    this.result+=number
  }

  subtract(number){
    this.result-=number
  }

  multiply(number){
    this.result*=number
  }

  divide(number){

    if(number==0)
    {
      throw new Error("Number cannot be divided by zero")
    }
    this.result/=number

  }

  getResult()
  {
    return this.result
  }

  clear()
  {
    this.result=0
  }

  calculate(expression)
  { 
    //removing spaces
    let newExpression = expression.replace(/\s+/g,'')

   for(let i=0;i<newExpression.length;i++)
   {
    if((newExpression[i]>='0' && newExpression[i]<='9') || newExpression[i]=='.' || newExpression[i]=='(' || newExpression[i]==')' || newExpression[i]=='+' || newExpression[i]=='-' || newExpression[i]=='*' || newExpression[i]=='/')
    {continue;
    }
    else{
      throw new Error('Invalid expression. Please provide a valid expression')
    }
   }
      
   try{
   this.result = eval(newExpression);
    }catch(error){
      throw new Error('Invalid expression. Please provide a valid expression')
   }

   //if number is divided by zero, eval() function returns the answer as infinity
   if(this.result==Infinity)
   {
    throw new Error('Number cannot be divided by zero')
   }
}
}

module.exports = Calculator;


