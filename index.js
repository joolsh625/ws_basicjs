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

function arraySet(array, number, x) {
    if(!(array[number] == null)) {
        array[number] = x;
    }
}

function addAll(array) {
    let reducer = (acc, cur) => acc + cur;
    return array.reduce(reducer);
}

function larger(a, b) {
    return Math.max(a, b);
}

function largest(array) {
    let reducer = (acc, cur) => Math.max(acc, cur);
    return array.reduce(reducer);
}

function compare(array1, array2) {
    if(array1 === array2) {
        return true;
    }
    if(array1.length =! array2.length) {
        return false;
    }
    for(let i=0; i<array1.length; i++) {
        if(array1[i]==!array2[i]) {
            return false;
        } else {
            return true;
        }
    }
}

function addToAll(array, x) {
    if(array===undefine)
    for(let i=0; i<array.length; i++) {
        array[i] = array[i] + x;
    }
    return array;
}