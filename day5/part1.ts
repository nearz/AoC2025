// Day 5 Part1: Cafeteria

import { readFileSync } from "fs";

class FreshRange {
  low: number;
  high: number;

  constructor(range: string) {
    const vals = range.split("-");
    this.low = Number(vals[0]);
    this.high = Number(vals[1]);
  }

  isFresh(ingredientID: number): boolean {
    return this.low <= ingredientID && ingredientID <= this.high;
  }
}

class IngredientDatabase {
  ranges: FreshRange[];
  ids: number[];

  constructor(ranges: string[], ids: string[]) {
    this.ranges = [];
    this.ids = [];
    for (const r of ranges) {
      this.ranges.push(new FreshRange(r));
    }
    for (const i of ids) {
      this.ids.push(Number(i));
    }
  }
}

function cafeteria(inputFile: string): number {
  const { ranges, ids } = readInput(inputFile);
  const iDB = new IngredientDatabase(ranges, ids);
  let sum = 0;
  for (const id of iDB.ids) {
    for (const r of iDB.ranges) {
      if (r.isFresh(id)) {
        sum++;
        break;
      }
    }
  }

  return sum;
}

function readInput(input: string): { ranges: string[]; ids: string[] } {
  const inputTxt = readFileSync(input, "utf-8");
  const [ranges, ids] = inputTxt.split("\n\n");
  const result = {
    ranges: ranges.split("\n").filter(Boolean),
    ids: ids.split("\n").filter(Boolean),
  };
  return result;
}

function main() {
  console.log(cafeteria("input.txt"));
}

main();
