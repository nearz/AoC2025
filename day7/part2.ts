// Day 7 Part 2: Laboratories

import { readFileSync } from "fs";

function laboratories(inputFile: string): number {
  const map = readInput(inputFile);
  const start = map[0].indexOf("S");
  let track: Map<number, number> = new Map();
  track.set(start, 1);

  for (let i = 1; i < map.length; i++) {
    const tempTrack: Map<number, number> = new Map();

    console.log(track);

    for (const [pos, cnt] of track) {
      if (map[i][pos] === "^") {
        tempTrack.set(pos + 1, (tempTrack.get(pos + 1) ?? 0) + cnt);
        tempTrack.set(pos - 1, (tempTrack.get(pos - 1) ?? 0) + cnt);
      } else {
        tempTrack.set(pos, (tempTrack.get(pos) ?? 0) + cnt);
      }
    }

    track = tempTrack;
  }

  let tempSum = 0;
  for (const t of track.values()) {
    tempSum += t;
  }
  return tempSum;
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
  console.log(laboratories("test.txt"));
}

main();
