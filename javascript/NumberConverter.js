//- Courtesy of James Grenning (@jwgrenning) and Jeff Langr (@jlangr)
//- Use this to learn TDD

const toWords = (number) => {
  if(number < 10){
    return singleDigits(number);
  }
  if(number%10 === 0) {
    return tens(number);
  }
  return doubleDigits(number);
}

const tens = (number) => {
  switch(number){
    case 10:
    return "ten";
    case 20:
    return "twenty";
    case 30:
    return "thirty";
    case 40:
    return "fourty";
    case 50:
    return "fifity";
    case 60:
    return "sixty";
    case 70:
    return "seventy";
    case 80:
    return "eighty";
    case 90:
    return "ninety";
  }  
}

const doubleDigits = (number)=>{
  switch(number){
    case 10:
    return "ten";
    case 11:
    return "eleven";
    case 12:
    return "twelve";
    case 13:
    return "thirteen";
    case 14:
    return "fourteen";
    case 15:
    return "fifteen";
    case 16:
    return "sixteen";
    case 17:
    return "seventeen";
    case 18:
    return "eighteen";
    case 19:
    return "nineteen";
  }
} 

const singleDigits = (number)=>{
  switch (number) {
    case 0:
      return 'zero'; 
      break;
    case 1:
      return 'one'; 
      break;
    case 2:
      return 'two'; 
      break;
    case 3:
      return 'three'; 
      break;
    case 4:
      return 'four'; 
      break;
    case 5:
      return 'five'; 
      break;
    case 6:
      return 'six'; 
      break;
    case 7:
      return 'seven'; 
      break;
    case 8:
      return 'eight'; 
      break;
    case 9:
      return 'nine'; 
      break;
    default:
      break;
  }
}

module.exports = toWords;