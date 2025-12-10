// Day 9 Part 1: Movie Theater

import { readFileSync } from "fs";

class Point {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

function movieTheater(inputFile: string): number {
  const points = readInput(inputFile);
  let max = 0;
  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      const p1 = points[i];
      const p2 = points[j];
      const area = (Math.abs(p1.y - p2.y) + 1) * (Math.abs(p1.x - p2.x) + 1);
      max = Math.max(max, area);
    }
  }
  return max;
}

function readInput(input: string): Point[] {
  const inputTxt = readFileSync(input, "utf-8");
  const lines = inputTxt.split("\n").filter(Boolean);
  const points: Point[] = [];
  for (const l of lines) {
    const coords = l.split(",");
    const np = new Point(Number(coords[0]), Number(coords[1]));
    points.push(np);
  }
  return points;
}

function main() {
  console.log(movieTheater("test.txt"));
}

main();
