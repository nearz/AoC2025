// Day 3 Part 1: Lobby

import { readFileSync } from "fs";

function lobby(input: string): number {
  const banks = readInput(input);
  let sum = 0;
  for (const b of banks) {
    const jolts = maxJoltage(b);
    sum += jolts;
  }
  return sum;
}

function maxJoltage(bank: string): number {
  let max = 0;
  for (let i = 0; i < bank.length; i++) {
    for (let j = i + 1; j < bank.length; j++) {
      let currJolt = Number(
        String.fromCharCode(bank.charCodeAt(i)) +
          String.fromCharCode(bank.charCodeAt(j)),
      );
      if (currJolt > max) {
        max = currJolt;
      }
    }
  }
  return max;
}

function readInput(input: string): string[] {
  const inputTxt = readFileSync(input, "utf-8");
  const lines = inputTxt.split("\n").filter(Boolean);
  return lines;
}

function main() {
  console.log(lobby("input.txt"));
}

main();
