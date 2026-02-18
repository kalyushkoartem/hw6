const min = 2;
const max = 20;
for (let i = min; i <= max; i += 1) {
    if (i === 0) {
       continue
    }
  if (i % 2 === 0) {
    console.log(i);
    }
}

const minimum = 7
const maximum = 70

for (let i = minimum; i <= maximum; i += 1){
    if (i % 7 === 0) {
    console.log(i);
    
}
}

let number = 1;
while (number <= 10) {
    console.log(number);
    number += 1;
}

let n = 30;
for (let i = 0; i < n; i += 1) {
    console.log(i);
    if (i >= n) {
        break;
    }
    
}
let numWhile = 0;
while (numWhile <= 20) {
    if (numWhile % 3 === 0) {
        numWhile ++
        continue;
    }
    console.log(numWhile);
    numWhile ++;
}
