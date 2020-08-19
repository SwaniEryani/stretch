//const args = process.argv;
let argsArr = process.argv.slice(2);

const obfuscate = function (input){
  let newPass="";
  for (let i = 0; i < input.length; i++){
    switch(input[i]){
      case "a" : newPass += "4"; break;
      case "o" : newPass += "0"; break;
      case "e" : newPass += "3"; break;
      case "l" : newPass += "1"; break;
      /*case "A" : newPass += "4"; break;
      case "O" : newPass += "0"; break;
      case "E" : newPass += "3"; break;
      case "L" : newPass += "1"; break;*/
      default : newPass += input[i];
    }
  }
  return newPass;
}
let result = obfuscate(argsArr);
console.log(obfuscate(result));