// Day 2 Part 1: Gift Shop

import { readFileSync } from "fs";

function giftShop(input: string): number {
  const idRanges = readInput(input);
  const invalids: number[] = [];
  for (const r of idRanges) {
    const startEnd = r.split("-");
    const start = Number(startEnd[0]);
    const end = Number(startEnd[1]);
    if (digitCount(start) % 2 !== 0 && digitCount(end) % 2 !== 0) continue;

    for (let i = start; i <= end; i++) {
      if (digitCount(i) % 2 !== 0) continue;
      if (isInvalid(i)) {
        invalids.push(i);
      }
    }
  }

  let sum = 0;
  for (const inv of invalids) {
    sum += inv;
  }
  return sum;
}

function isInvalid(n: number): boolean {
  const nStr = String(n);
  const digits = digitCount(n) / 2;
  const first = nStr.slice(0, digits);
  const second = nStr.slice(digits);
  if (first === second) return true;
  return false;
}

function digitCount(n: number): number {
  if (n === 0) return 1;
  return Math.floor(Math.log10(Math.abs(n))) + 1;
}

function readInput(input: string): string[] {
  const inputTxt = readFileSync(input, "utf-8");
  const lines = inputTxt.split(",");
  return lines;
}

function main() {
  console.log(giftShop("input.txt"));
}

main();
