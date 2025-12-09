// Day 6 Part 1: Trash Compactor

import { readFileSync } from "fs";

function trashCompactor(inputFile: string): number {
  const exps = readInput(inputFile);
  const rowLen = exps[0].length;
  let sum = 0;
  let i = 0;
  while (i < rowLen) {
    const exp: string[] = [];
    for (let j = exps.length - 1; j >= 0; j--) {
      exp.push(exps[j][i]);
    }
    sum += evaluate(exp);
    i++;
  }
  return sum;
}

function evaluate(exp: string[]): number {
  let final = 0;
  const op = exp[0];
  if (op === "*") {
    final = 1;
    for (let j = 1; j < exp.length; j++) {
      final *= Number(exp[j]);
    }
  } else {
    for (let j = 1; j < exp.length; j++) {
      final += Number(exp[j]);
    }
  }
  return final;
}

function readInput(input: string): string[][] {
  const inputTxt = readFileSync(input, "utf-8");
  const lines = inputTxt.split("\n").filter(Boolean);
  const exps: string[][] = [];
  for (const l of lines) {
    exps.push(l.split(" ").filter(Boolean));
  }
  return exps;
}

function main() {
  console.log(trashCompactor("input.txt"));
}

main();
