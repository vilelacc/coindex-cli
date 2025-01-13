import { Command } from "commander";
import { Coindex } from "../libs/coindex.js";

const Sqm = new Command("sqm")
  .description("returns sequential quotes for a single currency")
  .argument("<currency_code>", "Example currency code: USD-BRL")
  .argument("<amount>", "Number of results to return")
  .action((CurrencyCode, amount) => {
    Coindex.showSqm(CurrencyCode, amount);
  });

export default Sqm;
