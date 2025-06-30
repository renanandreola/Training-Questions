// https://www.hackerrank.com/challenges/grading/problem?isFullScreen=true

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

function gradingStudents(grades) {
  let result = [];

  for (let i = 0; i < grades.length; i++) {
    let grade = grades[i];

    if (grade < 38) {
      result.push(grade);
    } else {
      let nextMultipleOf5 = grade + (5 - (grade % 5));

      if (nextMultipleOf5 - grade < 3) {
        result.push(nextMultipleOf5);
      } else {
        result.push(grade);
      }
    }
  }

  return result;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const gradesCount = parseInt(readLine().trim(), 10);

  let grades = [];

  for (let i = 0; i < gradesCount; i++) {
    const gradesItem = parseInt(readLine().trim(), 10);
    grades.push(gradesItem);
  }

  const result = gradingStudents(grades);

  ws.write(result.join("\n") + "\n");

  ws.end();
}
