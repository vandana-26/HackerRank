'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'vanity' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts following parameters:
 *  1. STRING_ARRAY codes
 *  2. STRING_ARRAY numbers
 */

function vanity(codes, numbers) {
    let tempArr = [];
    var tempMap = new Map();
    tempMap.set('A',2);
    tempMap.set('B',2);
    tempMap.set('C',2);
    tempMap.set('D',3);
    tempMap.set('E',3);
    tempMap.set('F',3);
    tempMap.set('G',4);
    tempMap.set('H',4);
    tempMap.set('I',4);
    tempMap.set('J',5);
    tempMap.set('K',5);
    tempMap.set('L',5);
    tempMap.set('M',6);
    tempMap.set('N',6);
    tempMap.set('O',6);
    tempMap.set('P',7);
    tempMap.set('Q',7);
    tempMap.set('R',7);
    tempMap.set('S',7);
    tempMap.set('T',8);
    tempMap.set('U',8);
    tempMap.set('V',8);
    tempMap.set('W',9);
    tempMap.set('X',9);
    tempMap.set('Y',9);
    tempMap.set('Z',9);
    
    for(let i = 0; i < codes.length; i++){
        let arr = codes[i].split('');
        let str = "";
        for(let j = 0; j < arr.length; j++){
            str = str + tempMap.get(arr[j]);
        }
        console.log(str);
        
        for(let k = 0; k < numbers.length; k++){
            if(numbers[k].indexOf(str) != -1 && tempArr.indexOf(numbers[k]) == -1)
                tempArr.push(numbers[k]);
        }
        
    }
    tempArr.sort((a,b) =>{
      return a -b;
    })
    return tempArr;
    
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const codesCount = parseInt(readLine().trim(), 10);

    let codes = [];

    for (let i = 0; i < codesCount; i++) {
        const codesItem = readLine();
        codes.push(codesItem);
    }

    const numbersCount = parseInt(readLine().trim(), 10);

    let numbers = [];

    for (let i = 0; i < numbersCount; i++) {
        const numbersItem = readLine();
        numbers.push(numbersItem);
    }

    const result = vanity(codes, numbers);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
