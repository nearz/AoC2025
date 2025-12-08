// Day 3 Part 1 & 2: Lobby

import { readFileSync } from "fs";

function lobby(inputFile: string, keep: number): number {
  const input = readInput(inputFile);

  let sum = 0;
  for (const line of input) {
    sum += maxJoltage(
      line.split("").map((char) => Number(char)),
      keep,
    );
  }

  return sum;
}

function maxJoltage(bank: number[], keep: number): number {
  let final = 0;
  for (let i = keep - 1; i >= 0; i--) {
    const max =
      i === 0 ? Math.max(...bank.slice(0)) : Math.max(...bank.slice(0, -i));
    final += max * 10 ** i;
    const maxIdx = bank.indexOf(max);
    bank = bank.slice(maxIdx + 1);
  }
  return final;
}

function readInput(input: string): string[] {
  const inputTxt = readFileSync(input, "utf-8");
  const lines = inputTxt.split("\n").filter(Boolean);
  return lines;
}

function main() {
  let keep = 2;
  console.log(lobby("input.txt", keep));

  keep = 12;
  console.log(lobby("input.txt", keep));
}

main();
