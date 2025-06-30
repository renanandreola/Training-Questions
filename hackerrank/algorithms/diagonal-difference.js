// https://www.hackerrank.com/challenges/diagonal-difference/problem?isFullScreen=true

"use strict";

const fs = require("fs");

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

function diagonalDifference(arr) {
  let dig1 = 0;
  let dig2 = 0;

  console.log(arr.length);

  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);

    dig1 += arr[i][i];
    dig2 += arr[i][arr.length - 1 - i];
  }

  return dig2 > dig1 ? dig2 - dig1 : dig1 - dig2;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine().trim(), 10);

  let arr = Array(n);

  for (let i = 0; i < n; i++) {
    arr[i] = readLine()
      .replace(/\s+$/g, "")
      .split(" ")
      .map((arrTemp) => parseInt(arrTemp, 10));
  }

  const result = diagonalDifference(arr);

  ws.write(result + "\n");

  ws.end();
}
