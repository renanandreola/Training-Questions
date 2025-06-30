// https://www.hackerrank.com/challenges/compare-the-triplets/problem?isFullScreen=true

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

function compareTriplets(a, b) {
  var alicePoints = 0;
  var bobPoints = 0;

  if (a[0] > b[0]) {
    alicePoints++;
  }

  if (a[0] < b[0]) {
    bobPoints++;
  }

  if (a[1] > b[1]) {
    alicePoints++;
  }

  if (a[1] < b[1]) {
    bobPoints++;
  }

  if (a[2] > b[2]) {
    alicePoints++;
  }

  if (a[2] < b[2]) {
    bobPoints++;
  }

  var arr = [alicePoints, bobPoints];
  return arr;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const a = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((aTemp) => parseInt(aTemp, 10));

  const b = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((bTemp) => parseInt(bTemp, 10));

  const result = compareTriplets(a, b);

  ws.write(result.join(" ") + "\n");

  ws.end();
}
