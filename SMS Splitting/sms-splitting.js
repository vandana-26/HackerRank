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
 * Complete the 'segments' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts STRING message as parameter.
 */

function segments(message) {
    let arr = [];
    let str;
    let len = message.length;
    let suffix = len/155;
    suffix = Math.floor(suffix);
    let tot_seg = len%155 == 0 ? suffix : suffix+1;
    tot_seg = Math.floor(tot_seg);
    if(tot_seg > 1){
    for(let i = 0,m=0; i < tot_seg && m < len; i++){
        let index = message.substr(m,156).lastIndexOf(" ");
    if(i == tot_seg-1)
     str = message.substr(m,message.length) + "(" + (i+1) + "/" +tot_seg +")"; 
    else if(index < 155){
        str = message.substr(m,index) + " (" + (i+1) + "/" +tot_seg +")"; 
    }
    
    else if(index == 155){
      str = message.substr(m,index) + "(" + (i+1) + "/" +tot_seg +")"; 
    }
    else{
      str = message.substr(m,index) + "(" + (i+1) + "/" +tot_seg +")"; 
    }
    m = m + str.length - 5;
        arr.push(str);
    }
    }
    else
     arr.push(message);
    return arr;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const message = readLine();

    const result = segments(message);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
