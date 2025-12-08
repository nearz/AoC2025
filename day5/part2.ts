// Day 5 Part2: Cafeteria

import { readFileSync } from "fs";

class FreshRange {
  low: number;
  high: number;

  constructor(low: number, high: number);
  constructor(range: string);
  constructor(a: number | string, b?: number) {
    if (typeof a === "string") {
      const [lo, hi] = a.split("-").map(Number);
      this.low = lo;
      this.high = hi;
    } else {
      this.low = a;
      this.high = b!;
    }
  }

  shouldMerge(other: FreshRange): boolean {
    return this.low <= other.high + 1 && other.low <= this.high + 1;
  }

  merge(other: FreshRange): FreshRange {
    return new FreshRange(
      (this.low = Math.min(this.low, other.low)),
      (this.high = Math.max(this.high, other.high)),
    );
  }

  diff(): number {
    return this.high - this.low + 1;
  }
}

/////////////////////RUN/////////////////////////////////

function cafeteria(inputFile: string): number {
  const inputRanges = readInput(inputFile);
  const freshRanges: FreshRange[] = [];
  for (const ir of inputRanges) {
    freshRanges.push(new FreshRange(ir));
  }

  freshRanges.sort((a, b) => a.low - b.low);

  const mergedRanges: FreshRange[] = [];
  let track = freshRanges[0];
  let j = 1;
  while (j < freshRanges.length) {
    const fr2 = freshRanges[j];
    if (track.shouldMerge(fr2)) {
      const temp = track.merge(fr2);
      track = temp;
    } else {
      mergedRanges.push(track);
      track = freshRanges[j];
    }
    if (j === freshRanges.length - 1) mergedRanges.push(track);
    j++;
  }

  let sum = 0;
  for (const m of mergedRanges) {
    sum += m.diff();
  }

  return sum;
}

function readInput(input: string): string[] {
  const inputTxt = readFileSync(input, "utf-8");
  const ranges = inputTxt.split("\n\n")[0];
  return ranges.split("\n").filter(Boolean);
}

function main() {
  console.log(cafeteria("input.txt"));
}

main();
