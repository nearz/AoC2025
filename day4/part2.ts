// Day 4 Part 2: Printing Department
// TODO: More efficient way?

import { readFileSync } from "fs";

const dirs = new Map([
  ["tl", [-1, -1]],
  ["t", [-1, 0]],
  ["tr", [-1, 1]],
  ["r", [0, 1]],
  ["br", [1, 1]],
  ["b", [1, 0]],
  ["bl", [1, -1]],
  ["l", [0, -1]],
]);

function printingDepartment(inputFile: string): number {
  const map = readInput(inputFile);
  let sum = 0;

  while (true) {
    for (let i = 0; i < map.length; i++) {
      for (let j = 0; j < map[i].length; j++) {
        if (map[i][j] === "@") {
          if (canMove(i, j, map)) {
            sum++;
            map[i][j] = "T";
          }
        }
      }
    }

    let doneFlag = false;

    for (let i = 0; i < map.length; i++) {
      for (let j = 0; j < map[i].length; j++) {
        if (map[i][j] === "T") {
          map[i][j] = "X";
          doneFlag = true;
        }
      }
    }

    if (!doneFlag) break;
  }
  return sum;
}

function canMove(y: number, x: number, map: string[][]): boolean {
  const max = 4;
  let count = 0;
  for (const d of dirs.values()) {
    const dy = y - d[0];
    const dx = x - d[1];
    if (dy < 0 || dx < 0) continue;
    if (dy >= map.length || dx >= map[y].length) continue;
    if (map[dy][dx] === "@" || map[dy][dx] === "T") count++;
  }
  return count < max;
}

function readInput(input: string): string[][] {
  const inputTxt = readFileSync(input, "utf-8");
  const lines = inputTxt.split("\n").filter(Boolean);
  const map: string[][] = [];
  for (const l of lines) {
    map.push(l.split(""));
  }
  return map;
}

function main() {
  console.log(printingDepartment("input.txt"));
}

main();
