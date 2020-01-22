/*
 * This is index.js
 * Start by modifying the id, fn and sn functions to return
 * information about you, then open index.html to check what
 * else you have to do, adding functions to the end of this
 * file as necessary.
 *
 * NB: all code you write this year shoudl use strict mode, so
 * we've enabled that by default with the first line of code.
 */

'use strict';

function id() {
    return "UP894547";
    // e.g. return "UP654321";
}

function fn() {
    return "Jools";
}

function sn() {
    return "Hattey";
}

function add(a, b) {
    return a+b;
}

function subtract(a, b) {
    return a - b;
}

function checkObject(object) {
    object.checked = true;
}

function checkObjectInside(object) {
    if(!(object.data === undefined)) {
        checkObject(object.data);
    }
}

function arraySet(inputArray, number, x) {
    if(!(inputArray[number] == null)) {
        inputArray[number] = x;
    }
}

function addAll(inputArray) {
    let reducer = (acc, cur) => acc + cur;
    return inputArray.reduce(reducer);
}

function larger(a, b) {
    return Math.max(a, b);
}

function largest(inputArray) {
    let reducer = (acc, cur) => Math.max(acc, cur);
    return inputArray.reduce(reducer);
}

function compare(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length != b.length) return false;
  
    for (var i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) return false;
    }
    return true;
}

function addToAll(inputArray, x) {
    for(let i=0; i<inputArray.length; i++) {
        inputArray[i] += x;
    }
    return inputArray;
}

let remembered;

function rememberThis(inputValue) {
    remembered = inputValue;
}

function nArray(n) {
    let arrayResult = [];
    for(let i=0; i<n; i++) {
        arrayResult[i] = i+1;
    }
    return arrayResult;
}

function addAllOpt(inputArray) {
    if(inputArray == null) {
        return 0;
    } else if(inputArray.length == 0) {
        return 0;
    } else {
        let reducer = (acc, cur) => acc + cur;
        return inputArray.reduce(reducer);
    }
}

function divisors(inputArray, inputDivisor) {
    let resultArray = [];
    let x = 0;
    for(let i=0; i<inputArray.length; i++) {
        if(inputArray[i]%inputDivisor==0) {
            resultArray[x] = inputArray[i];
            x++;
        }
    }
    return resultArray;
}

function multiples(n, m) {
    let resultArray = [];
    for(let i=0; i<n; i++) {
        resultArray[i] = (i+1)*m;
    }
    return resultArray;
}