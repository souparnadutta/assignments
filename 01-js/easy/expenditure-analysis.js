/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let answer = [];

  for (let i = 0; i < transactions.length; i++) {
      let transaction = transactions[i];
      let found = false;
  
      for (let j = 0; j < answer.length; j++) {
          if (answer[j].category === transaction.category) {
              answer[j].totalSpent += transaction.price;
              found = true;
              break;
          }
      }

      if (!found) {
          let newObj = {
              category: transaction.category,
              totalSpent: transaction.price
          };
          answer.push(newObj);
      }
  }

  return answer;
}





module.exports = calculateTotalSpentByCategory;
