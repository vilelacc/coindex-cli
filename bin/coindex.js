#!/usr/bin/env node

// external modules
import { Command } from "commander";

// node core modules
import { readFileSync } from "fs";

// internal modules
import { CoinNames, CoinCombinations } from "../src/libs/coindex.js";
import LastCommand from "../src/commands/coindex-last.js";
import Daily from "../src/commands/coindex-daily.js";
import Sqm from "../src/commands/coindex-sqm.js";

const pkg = JSON.parse(
  readFileSync(new URL("../package.json", import.meta.url))
);

const program = new Command();

program
  .name("coindex")
  .description(pkg.description)
  .option("-l --list", "look the list of coin names")
  .option("-c --coins", "look the full list of combinations")
  .action((options) => {
    if (options.coins) {
      CoinCombinations();
    } else if (options.list) {
      CoinNames();
    }
  })
  .version(pkg.version);

if (!process.argv[2]) {
  process.argv.push("-h");
}

program.addCommand(LastCommand);
program.addCommand(Daily);
program.addCommand(Sqm);

program.parse();
