let bet = [];

for(let i in bet) {
  let strRoll = '';
  let roll = bet[i];
  if(roll < 10) strRoll = '0'+roll;
  else strRoll = ''+roll;
  let rollSelector = '#n'+strRoll;
  $(rollSelector).click();
}
