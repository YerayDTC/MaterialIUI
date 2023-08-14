
function maxOfTwonumbers(num1, num2) {
    if(num1 < num2) {
        return num2;
    } else {
        return num1;
    }
}

maxOfTwonumbers(2, 4)

function maxOfThree(num1, num2, num3) {
    if(num1 > num2 && num1 > num3) {
        return num1
    } else if(num2 > num1 && num2 > num3){
        return num2
    } else if (num3 > num1 && num3 > num2) {
        return num3
    }
}

maxOfThree(2,4,6)



var vocal = "a,e,i,o,u"
function isCharacterAVowel(vocal) {
  
    switch(vocal) {
      case "a": console.log("true");
      break;
      case "e": console.log("true");
      break;
      case "i": console.log("true");
      break;
      case "o": console.log("true");
      break;
      case "u": console.log("true");
      break
      default: console.log("false");
      
    }
}


isCharacterAVowel("q")