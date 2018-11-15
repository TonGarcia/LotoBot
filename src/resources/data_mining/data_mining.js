// var script = document.createElement('script');
// script.src = 'http://code.jquery.com/jquery-1.11.0.min.js';
// script.type = 'text/javascript';
// document.getElementsByTagName('head')[0].appendChild(script);

function getId(tds) {return tds[0].innerHTML;}
function getDate(tds) {return tds[1].innerHTML;}
function getRevenue(tds) {return tds[17].innerHTML;}
function getResult(tds) {
  let rolls = [];
  for(let i=2; i<16; i++) rolls.push(tds[i].innerHTML);
  return rolls;
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

function arrayToCSV(arr, prefix) {
  let obj = {};
  for(let i in arr) obj[`${prefix}_${i}`] = arr[i];
  return obj;
}

function csvFormat(obj) {
  let csvObj = {
    'id': obj.id,
    'date': obj.date,
    'rolls': obj.statistics.rolls,
    'winners_amount': obj.statistics.winners_amount,
    'winners_share': obj.statistics.winners_share,
  };

  // csvObj.winners_amount =

  return csvObj;
}

function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

let expectedTotalDrawns = 1731;
let trs = $('table tr');
let drawns = [];

$(function(){
  try {
    for(let tr in trs) {
      let jtr = {};
      if (trs.hasOwnProperty(tr)) jtr = $(trs[tr]);
      else continue;

      let tds = jtr.children('td');
      if(tds.length <= 2) continue;
      window.tr_tds = tds;

      let rolls = {
        'id': getId(tds),
        'date': getDate(tds),
        "results": getResult(tds),
        "statistics": {
          "rolls": getRevenue(tds),
          "winners_amount": getWinnersAmount(tds),
          "winners_share": getWinnersShare(tds)
        }
      };

      // drawns[rolls.id] = rolls;
      drawns.push(rolls);
    }

    window.drawns = drawns;
    let amountOfDrawns = Object.keys(drawns).length;
    if(amountOfDrawns === expectedTotalDrawns) {
      const drawnsJSON = JSON.stringify(window.drawns);
      console.log('EVERY BET RETRIEVED');
      download('drawns.json', drawnsJSON);
      console.log('JSON downloaded');

      console.log('Creating CSV');
      //TODO: create objects CSV ready, create it file & download it.... items, convert to file arrayToCSV(window.drawns, prefix);
      console.log('CSV downloaded');
    } else {
      console.log('Expected amount of drawns: ' + expectedTotalDrawns + ', amount of retrieved drawns: ' + amountOfDrawns);
    }
  }catch(error) {
    console.log('error(try/catch): ', error);
  }
});
