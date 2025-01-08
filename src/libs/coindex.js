// external modules
import chalk from "chalk";

// internal modules
import FetchData from "./coindex-fetch-data.js";

// node core modules
import { readFileSync } from "fs";

const coinNamesData = JSON.parse(
  readFileSync(new URL("../utils/data/coin-names.json", import.meta.url))
);

const coinCombinationsData = JSON.parse(
  readFileSync(new URL("../utils/data/coin-combinations.json", import.meta.url))
);

class Coindex {
  static showCoinNames() {
    console.table(coinNamesData);
  }

  static showCoinCombinations() {
    console.table(coinCombinationsData);
  }

  static async showLast(currencyCode) {
    const data = await FetchData.last(currencyCode);

    if (data.code) {
      console.log(
        chalk.white.bold(`"${data.code}"`) +
          chalk.red.bold(" Invalid values ​​in input")
      );
    } else {
      console.log(data);
    }
  }
}

export default Coindex;
