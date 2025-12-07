// Day 2 Part 2: Gift Shop

import { readFileSync } from "fs";

function giftShop(input: string): number {
  const idRanges = readInput(input);
  let sum = 0;
  for (const r of idRanges) {
    const startEnd = r.split("-");
    const start = Number(startEnd[0]);
    const end = Number(startEnd[1]);
    for (let i = start; i <= end; i++) {
      if (isInvalid(i)) {
        sum += i;
      }
    }
  }

  return sum;
}

function isInvalid(n: number): boolean {
  const nStr = String(n);
  const half = Math.floor(nStr.length / 2);
  for (let i = half; i > 0; i--) {
    const sub = nStr.slice(0, i);
    const rep = sub.repeat(Math.floor(nStr.length / i));
    if (rep === nStr) {
      return true;
    }
  }
  return false;
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
