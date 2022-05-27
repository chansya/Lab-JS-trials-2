'use strict';

// 1. printIndices
function printIndices(items) {
  for(const ind in items){
    console.log(`${items[ind]} ${ind}`);
  }
}
// console.log(printIndices(['apple','berry','cherry']))
// 2. everyOtherItem
function everyOtherItem(items) {
  let result = [];
  for (const ind in items) {
    if (ind % 2 === 0) {
      result.push(items[ind]);
    }
  } 
  console.log(result);
}
// everyOtherItem(['apple','berry','cherry'])

// 3. smallestNItems
function smallestNItems(items, n) {
  // Replace this with your code
  let sortedItems = items.sort((a, b) => a - b);
  let sortedNItems = sortedItems.slice(0, n); 
  sortedNItems.reverse();

  console.log(sortedNItems);

}
smallestNItems([1, 4, 21, 30, 100000],2)