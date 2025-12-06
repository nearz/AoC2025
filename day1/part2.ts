// Day 1 Part 2: Secret Entrance

import { readFileSync } from "fs";

function secretEntrence(
  start: number,
  positions: number,
  input: string,
): number {
  const dialTurns = readInput(input);
  let count = 0;
  let curr = start;

  for (const d of dialTurns) {
    const dir = d.slice(0, 1);
    let turns = Number(d.slice(1));
    if (dir === "L") {
      count +=
        Math.floor((curr - 1) / positions) -
        Math.floor((curr - turns - 1) / positions);
      curr = trueModulo(curr - turns, positions);
    } else {
      count += Math.floor((curr + turns) / positions);
      curr = trueModulo(curr + turns, positions);
    }
  }
  return count;
}

function trueModulo(n: number, d: number): number {
  return ((n % d) + d) % d;
}

function readInput(input: string): string[] {
  const inputTxt = readFileSync(input, "utf-8");
  const lines = inputTxt.split("\n").filter((line) => line !== "");
  return lines;
}

function main() {
  console.log(secretEntrence(50, 100, "input.txt"));
}

main();
