// var script = document.createElement('script');
// script.src = 'http://code.jquery.com/jquery-1.11.0.min.js';
// script.type = 'text/javascript';
// document.getElementsByTagName('head')[0].appendChild(script);

function getId(tds) {return tds[0].innerHTML;}
function getDate(tds) {return tds[1].innerHTML;}
function getRevenue(tds) {return tds[17].innerHTML;}
function getResult(tds) {
  dawns = [];
  for(i=2; i<16; i++) dawns.push(tds[i].innerHTML);
  return dawns;
}
function getWinnersAmount(tds) {
  return {
    "15": tds[18].innerHTML,
    "14": tds[21].innerHTML,
    "13": tds[22].innerHTML,
    "12": tds[23].innerHTML,
    "11": tds[24].innerHTML
  };
}
function getWinnersShare(tds) {
  return {
    "15": tds[25].innerHTML,
    "14": tds[26].innerHTML,
    "13": tds[27].innerHTML,
    "12": tds[28].innerHTML,
    "11": tds[29].innerHTML
  };
}

let expectedTotalBets = 1731;
let trs = $('table tr');
let bets = {};

$(function(){
  try {
    for(let tr in trs) {
      let jtr = {};
      if (trs.hasOwnProperty(tr)) jtr = $(trs[tr]);
      else continue;

      let tds = jtr.children('td');
      if(tds.length <= 2) continue;
      window.tr_tds = tds;

      let bet = {
        'id': getId(tds),
        'date': getDate(tds),
        "result": getResult(tds),
        "statistics": {
          "bet": getRevenue(tds),
          "winners_amount": getWinnersAmount(tds),
          "winners_share": getWinnersShare(tds)
        }
      };

      bets[bet.id] = bet;
    }

    window.bets = bets;
    let amountOfBets = Object.keys(bets).length;
    if(amountOfBets === expectedTotalBets) {
      console.log('EVERY BET RETRIEVED');
    } else {
      console.log('Expected amount of bets: ' + expectedTotalBets + ', amount of retrieved bets: ' + amountOfBets);
    }
  }catch(error) {
    console.log('error(try/catch): ', error);
  }
});
