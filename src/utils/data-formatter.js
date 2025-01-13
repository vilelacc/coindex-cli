import chalk from "chalk";
import DateFormatter from "./date-formatter.js";

const DataFormatter = (object) => {
  if (object.name && object.create_date) {
    console.log(`${chalk.inverse(object.name)}\n`);
    //  `Time: ${chalk.bgRed(object.create_date.split(" ")[1].trim())}`
  }
  console.log(
    `Buy: ${object.bid}\n` +
      `Sale: ${object.ask}\n` +
      `Maximum: ${object.high}\n` +
      `Minimum: ${object.low}\n` +
      `Variation: ${object.varBid}\n` +
      `% of Variation: ${object.pctChange}\n` +
      `Date (UTC): ${chalk.bgRed(`${DateFormatter(object.timestamp)}`)}\n`
  );
};

export default DataFormatter;
