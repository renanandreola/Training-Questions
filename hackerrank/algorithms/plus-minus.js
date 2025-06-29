// https://www.hackerrank.com/challenges/one-week-preparation-kit-plus-minus/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D=one-week-day-one

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
  const arrSize = arr.length;
  let positiveNumbers = 0;
  let negativeNumbers = 0;
  let zeroNumbers = 0;

  for (let number of arr) {
    if (number == 0) {
      zeroNumbers++;
    }

    if (number > 0) {
      positiveNumbers++;
    }

    if (number < 0) {
      negativeNumbers++;
    }
  }

  console.log(positiveNumbers / arrSize);
  console.log(negativeNumbers / arrSize);
  console.log(zeroNumbers / arrSize);
}

function main() {
  const n = parseInt(readLine().trim(), 10);

  const arr = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  plusMinus(arr);
}
