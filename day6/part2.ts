// Day 6 Part 2: Trash Compactor
// TODO: Messy

import { readFileSync } from "fs";

class Exp {
  op: string = "";
  vals: string[] = [];
}

function trashCompactor(inputFile: string): number {
  const lines = readInput(inputFile);
  const re = new RegExp("^ *$", "g");
  let exp = new Exp();
  let sum = 0;

  for (let i = 0; i < lines[0].length; i++) {
    let hrz = "";
    for (let j = 0; j < lines.length; j++) {
      let curr = lines[j][i];
      if (curr === "+" || curr === "*") {
        exp.op = curr;
      } else {
        hrz += curr;
      }
    }

    if (re.test(hrz)) {
      sum += evaluate(exp);
      exp = new Exp();
    } else if (i === lines[0].length - 1) {
      exp.vals.push(hrz.trim());
      sum += evaluate(exp);
      exp = new Exp();
    } else {
      exp.vals.push(hrz.trim());
    }
  }

  return sum;
}

function evaluate(exp: Exp) {
  let final = 0;
  if (exp.op === "*") {
    final = 1;
    for (const v of exp.vals) {
      final *= Number(v);
    }
  } else {
    for (const v of exp.vals) {
      final += Number(v);
    }
  }
  return final;
}

function readInput(input: string): string[] {
  const inputTxt = readFileSync(input, "utf-8");
  const lines = inputTxt.split("\n").filter(Boolean);
  return lines;
}

function main() {
  console.log(trashCompactor("input.txt"));
}

main();
