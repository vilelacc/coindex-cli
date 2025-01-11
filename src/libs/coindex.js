// external modules
import chalk from "chalk";

// internal modules
import FetchData from "./coindex-fetch-data.js";
import objectArray from "../utils/object-to-array.js";

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

    if (data.status) {
      this.handlerError(data.status);
    } else {
      const convertedData = objectArray(data);
      // Iteração pelo objeto
      convertedData.forEach((obj) => {
        const { name, high, low, varBid, pctChange, bid, ask, create_date } =
          obj;
        console.log(
          `${chalk.inverse(name)}\n\n` +
            `Compra: ${chalk.magenta.bold(bid)}\n` +
            `Venda: ${chalk.red.bold(ask)}\n` +
            `Máxima: ${chalk.yellowBright.bold(high)}\n` +
            `Mínima: ${chalk.yellow.bold(low)}\n` +
            `Variação: ${chalk.magenta.bold(varBid)}\n` +
            `% da Variação: ${chalk.cyan.bold(pctChange)}\n` +
            `Hora: ${chalk.green.bold(create_date.split(" ")[1].trim())}\n`
        );
      });
    }
  }

  static handlerError(code) {
    switch (code) {
      case 404:
        console.error(chalk.red.bold("Invalid input data"));
        break;
    }
  }
}

export default Coindex;
