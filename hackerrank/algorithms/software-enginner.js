// https://www.hackerrank.com/mock-interviews/software-engineer/coding/74615

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

function getRemovableIndices(str1, str2) {
  if (str1.length !== str2.length + 1) return [-1];

  const result = [];

  for (let i = 0; i < str1.length; i++) {
    const newStr = str1.slice(0, i) + str1.slice(i + 1);

    if (newStr === str2) {
      result.push(i);
    }
  }

  return result.length > 0 ? result : [-1];
}

function main() {
  const str1 = readLine();

  const str2 = readLine();

  const result = getRemovableIndices(str1, str2);

  process.stdout.write(result.join("\n") + "\n");
}
