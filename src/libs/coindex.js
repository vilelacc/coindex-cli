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

  static async showDaily(CurrencyCode, NumberDays) {
    const data = await FetchData.daily(CurrencyCode, NumberDays);
    if (data.status) {
      ErrorHandler(data.status);
    } else {
      data.forEach(DataFormatter);
    }
  }

  static async showPec(CurrencyCode, StartDate, EndDate) {
    const data = await FetchData.pec(CurrencyCode, StartDate, EndDate);
    if (data.status) {
      ErrorHandler(data.status);
    } else {
      data.forEach(DataFormatter);
    }
  }

  static async showSqm(CurrencyCode, amount) {
    const data = await FetchData.sqm(CurrencyCode, amount);
    if (data.status) {
      ErrorHandler(data.status);
    } else {
      data.forEach(DataFormatter);
    }
  }

  static async showRspc(CurrencyCode, amount, StartDate, EndDate) {
    const data = await FetchData.rspc(CurrencyCode, amount, StartDate, EndDate);
    if (data.status) {
      ErrorHandler(data.status);
    } else {
      data.forEach(DataFormatter);
    }
  }
}

export { CoinNames, CoinCombinations, Coindex };
