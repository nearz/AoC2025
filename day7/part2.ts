// Day 7 Part 2: Laboratories
// TODO: Maybe enumerate paths with DFS?

import { readFileSync } from "fs";

function laboratories(inputFile: string): number {
  const map = readInput(inputFile);
  let track: number[] = [map[0].indexOf("S")];
  let sum = 0;
  for (let i = 1; i < map.length; i++) {
    const tempTrack: number[] = [];
    for (const t of track) {
      if (map[i][t] === "^") {
        sum++;
        tempTrack.push(t + 1);
        tempTrack.push(t - 1);
      } else {
        tempTrack.push(t);
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
