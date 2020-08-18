const args = process.argv;
let arrForreverse = args.slice(2);

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
// read the array from the last item and put it in new array
const reverseItems = function(input) {
  let arr = convertToArray(input);
  let returnArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    returnArr.push(arr[i]);
  }
  return convertToString(returnArr);
};
// puting everything togather
const reverse = function(input) {
  for (let i = 0; i < input.length; i++) {
    console.log(reverseItems(input[i]));
    //arr.push(reverseItems(input[i]));
  }
  //return arr;
};

//console.log(reverse(arrForreverse));
reverse(arrForreverse);