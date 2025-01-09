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
      // Iteração pelo objeto
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          const { name, high, low, varBid, pctChange, bid, ask, create_date } =
            data[key];
          console.log(
            `${chalk.inverse(
              name
            )}\n\nCompra: ${bid}\nVenda: ${ask}\nMáxima: ${high}\nMínima: ${low}\nVariação: ${varBid}\n% da Variação: ${pctChange}\nHora: ${create_date
              .split(" ")[1]
              .trim()}\n`
          );
        }
      }
    }
  }
}

export default Coindex;
