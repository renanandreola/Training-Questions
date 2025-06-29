// https://www.hackerrank.com/challenges/plus-minus/problem?isFullScreen=true

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
  var countPositive = 0;
  var countNegative = 0;
  var countZero = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      countZero++;
    }

    if (arr[i] > 0) {
      countPositive++;
    }

    if (arr[i] < 0) {
      countNegative++;
    }
  }

  let postitive = (countPositive / arr.length).toFixed(6);
  let negative = (countNegative / arr.length).toFixed(6);
  let zero = (countZero / arr.length).toFixed(6);

  console.log(postitive);
  console.log(negative);
  console.log(zero);

  return postitive, negative, zero;
}

function main() {
  const n = parseInt(readLine().trim(), 10);

  const arr = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  plusMinus(arr);
}
