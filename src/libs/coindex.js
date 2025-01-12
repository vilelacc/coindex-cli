// external modules
import chalk from "chalk";

// internal modules
import FetchData from "./coindex-fetch-data.js";
import ErrorHandler from "../utils/error-handler.js";
import ObjectArray from "../utils/object-array.js";
import DataLoader from "../utils/data-loader.js";
import DataFormatter from "../utils/data-formatter.js";

const CoinNames = () => {
  const data = DataLoader("../utils/data/coin-names.json");
  console.table(data);
};

const CoinCombinations = () => {
  const data = DataLoader("../utils/data/coin-combinations.json");
  console.table(data);
};

// Main class for Coindex
class Coindex {
  static async showLast(currencyCode) {
    const data = await FetchData.last(currencyCode);

    if (data.status) {
      ErrorHandler(data.status);
    } else {
      const convertedData = ObjectArray(data);
      convertedData.forEach(DataFormatter);
    }
  }
}

export { CoinNames, CoinCombinations, Coindex };
