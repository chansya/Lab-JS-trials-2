'use strict';

// 1. countWords
function countWords(phrase) {
  let wordCounts = {};
  for(const word of phrase.split(' ')){
    if(word in wordCounts){
      wordCounts[word] += 1;
    } else {
      wordCounts[word] = 1;
    }
  }
  return wordCounts;
}
// const result = console.log(countWords('Return a dictionary of each word and the no. of times they appear a'))

// 2. getMelonsAtPrice
function getMelonsAtPrice(price) {
  // Replace this with your code
  const melonsPrice = {
    2.50: ['Cantaloupe', 'Honeydew'],
    2.95: ['Watermelon'],
    3.25: ['Musk', 'Crenshaw'],
    14.25: ['Christmas']
  }
  if (!(price in melonsPrice)) {
    return; 
  }
  let melons= melonsPrice[price]
  melons.sort()

  return melons
}
// const result1 = console.log(getMelonsAtPrice(3.25))