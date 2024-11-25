// https://www.hackerrank.com/challenges/mini-max-sum/problem?isFullScreen=true

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
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
  let min = 0;
  let max = 0;

  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (i < arr.length - 1) {
      min += arr[i];
    }
  }

  for (let i = 1; i < arr.length; i++) {
    max += arr[i];
  }

  console.log(min + " " + max);
}

function main() {
  const arr = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  miniMaxSum(arr);
}
