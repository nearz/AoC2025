// Day 7 Part 1: Laboratories

import { readFileSync } from "fs";

function laboratories(inputFile: string): number {
  const map = readInput(inputFile);
  let track = new Set([map[0].indexOf("S")]);
  let sum = 0;
  for (let i = 1; i < map.length; i++) {
    const tempTrack = new Set<number>([]);
    for (const t of track) {
      if (map[i][t] === "^") {
        sum++;
        tempTrack.add(t + 1);
        tempTrack.add(t - 1);
      } else {
        tempTrack.add(t);
      }
    }
    track = tempTrack;
  }
  return sum;
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
  console.log(laboratories("input.txt"));
}

main();
