import { Command } from "commander";
import { Coindex } from "../libs/coindex.js";

const LastCommand = new Command("last")
  .description("returns the last occurrence of the selected currencies.")
  .argument(
    "<currency_code>",
    "Selected currencies separated by comma (,) Ex.: USD-BRL,EUR-BRL,BTC-BRL"
  )
  .action((CurrencyCode) => {
    Coindex.showLast(CurrencyCode.split(" ").join(","));
  });

export default LastCommand;
