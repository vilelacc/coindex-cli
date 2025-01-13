import { Command } from "commander";
import { Coindex } from "../libs/coindex.js";

const Daily = new Command("daily")
  .description("returns the closing of the last few days")
  .argument("<currency_code>", "Example currency code: USD-BRL")
  .argument("<number_days>", "Numbers of days 30/60/90/.../360 days")
  .action((CurrencyCode, NumberDays) => {
    Coindex.showDaily(CurrencyCode, NumberDays);
  });

export default Daily;
