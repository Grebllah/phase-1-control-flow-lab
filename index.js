function scuberGreetingForFeet(ride){
  // 1) gives customers a free sample if the ride is less than or equal to 400 feet
  //     2) charges 20 dollars for a distance between 400 and 2000 feet
  //     3) charges 30 dollars for a distance over 2000 feet
  //     4) does not allow rides over 2500 feet
  if (ride <= 400) {
    return "This one is on me!"
  }
  else if (ride <= 2000 && ride > 400) {
    return "That will be twenty bucks."
  }
  else if (ride <= 2500 && ride > 2000) {
    return "I will gladly take your thirty bucks."
  }
  else if (ride > 2500) {
    return "No can do."
  }
}

function ternaryCheckCity(city){
  if (city === "NYC") {
    return "Ok, sounds good."
  }
  else {return "No go."}
}

function switchOnCharmFromTip(tip){
  switch (tip) {
    case 'generous':
      return "Thank you so much.";
      break;
      case 'not as generous':
      return "Thank you.";
      break;
      default:
      return "Bye.";
      break;
  }
}