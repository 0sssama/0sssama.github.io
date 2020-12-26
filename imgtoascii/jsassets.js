function splitArray(list, num){
 const final = [];
  for (let i = 0; i < list.length; i+=num) {
    var holder = [];
    for (let j = i; j < i+num; j++) {
      holder.push(list[j]);
    }
    final.push(holder);
  }
  return final;
}

function listOfZeros(width){
  var list = [];
  for(let k = 0; k<width;k++){
    list.push(0);
  }
  return list;
}

function giveAscii(graySc) {
  switch (true){
    case (graySc >= 0 && graySc <= 15): return '@';
    case (graySc > 15 && graySc <= 30): return '#';
    case (graySc > 30 && graySc <= 45): return '&';
    case (graySc > 45 && graySc <= 60): return '$';
    case (graySc > 60 && graySc <= 75): return '%';
    case (graySc > 75 && graySc <= 90): return '?';
    case (graySc > 90 && graySc <= 105): return '=';
    case (graySc > 105 && graySc <= 120): return '+';
    case (graySc > 120 && graySc <= 135): return '*';
    case (graySc > 135 && graySc <= 150): return '/';
    case (graySc > 150 && graySc <= 165): return '(';
    case (graySc > 165 && graySc <= 180): return ':';
    case (graySc > 180 && graySc <= 195): return ';';
    case (graySc > 195 && graySc <= 210): return '-';
    case (graySc > 210 && graySc <= 225): return ',';
    case (graySc > 225 && graySc <= 240): return '.';
    case (graySc > 240 && graySc <= 255): return ' ';
  }
}