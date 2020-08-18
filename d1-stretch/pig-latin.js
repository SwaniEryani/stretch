const args = process.argv;
let argsArr = args.slice(2);
//put every char as array item
const convertToArray = function(input) {
  let arr = [];
  for (let i = 0; i < input.length; i ++) {
    arr.push(input[i]);
  }
  return arr;
};
// make the array of chars into a string
const convertToString = function(input) {
  let returnVal = '';
  for (let i = 0; i < input.length; i++) {
    returnVal +=  input[i];
  }
  return returnVal;
};
//add the first item to the last index
const pigLatinItem = function(input) {
  let arr = convertToArray(input);
  arr[arr.length] = arr[0];
  arr.shift();
  return convertToString(arr);
};
const pigLatin = function(input) {
  let arr = [];
  for (let i = 0; i < input.length; i ++) {
    arr.push(pigLatinItem(input[i]) + "ay ");
  }
  return convertToString(arr);
};
console.log(pigLatin(argsArr));