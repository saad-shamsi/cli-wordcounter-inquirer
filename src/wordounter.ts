import { input } from "@inquirer/prompts";
import { confirm } from "@inquirer/prompts";
import { questions } from "./questions/confirm.js";

import chalk from "chalk";
import { inputQuestions } from "./questions/input.js";
let again: boolean = false;
async function wordCounter() {
  do {
    const paragraph = await input(inputQuestions[0]);

    // words

    let words: string[] = paragraph.split(" ");

    console.log(
      chalk.blueBright(`Total Words:: ${chalk.whiteBright(words.length)}`)
    );
    // characters
    let charWithoutSpecs = paragraph.replace(/ /g, "");
    console.log(
      chalk.blueBright(
        `Total Characteres: ${chalk.whiteBright(charWithoutSpecs.length)}`
      )
    );
    again = await restartAgain();
  } while (again);
}

async function restartAgain() {
  const askAgain = await confirm(questions[0]);
  return askAgain;
}
export default wordCounter;
