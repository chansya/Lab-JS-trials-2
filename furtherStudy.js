'use strict';

function wordsInCommon(words1, words2) {
  let word1Set = new Set(words1);
  let word2Set = new Set(words2);

  let result = new Set();

  for(let word of word1Set){
    if(word2Set.has(word)){
      result.add(word);
    }
  }
  return Array.from(result);
}
let result=wordsInCommon(['ice cream','pizza','bread'],['bread', 'cereal','bread','pizza','chocolate'])
console.log(result)

function kidsGame(names) {
  // Replace this with your code
}
