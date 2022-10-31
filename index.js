// as a rule of thump it is always better to write the conditions useing if clases
// then changing it to either ternery expression or switch statement based on instructions. 

function scuberGreetingForFeet(ride){
  // Write your code here!
  if (ride <= 400 ) {
    return 'This one is on me!';
  } else if (ride >=400 && ride <= 2000){
    return 'That will be twenty bucks.';
  }else if (ride >= 2000 && ride <=2500){
    return 'I will gladly take your thirty bucks.';
  } else {
    return 'No can do.'
  }
}

// function ternaryCheckCity(city){
//   // Write your code here!
//   if (city === NYC){
//     return "Ok, sounds good.";
//   }else{
//     return "No go."
//   }
// }

function ternaryCheckCity(city) {
  return city === "NYC"? "Ok, sounds good." : "No go."
}


// function switchOnCharmFromTip(tip){
//   // Write your code here!
//   if (tip === generous) {
//     return "Thank you so much.";
//   }else if (tip === somethingelse) {
//     return "Thank you.";
//   }else {
//     return "Bye."
//   }

// }

function switchOnCharmFromTip(tip) {
  switch (tip) {
    case "generous":
      return "Thank you so much."
    case "not as generous":
      return "Thank you."
    default:
      return "Bye."
  }
}