import chalk from "chalk";

const DataFormatter = (object) => {
  if (object.name && object.create_date) {
    console.log(
      `${chalk.bgGray(object.name)}\n\n` +
        `Time: ${chalk.bgGreen(
          object.create_date.split(" ")[1].trim()
        )}`
    );
  }
  console.log(
    `Buy: ${chalk.bgMagenta(object.bid)}\n` +
      `Sale: ${chalk.bgRed(object.ask)}\n` +
      `Maximum: ${chalk.bgYellow(object.high)}\n` +
      `Minimum: ${chalk.bgYellow(object.low)}\n` +
      `Variation: ${chalk.bgBlueBright(object.varBid)}\n` +
      `% of Variation: ${chalk.bgCyan(object.pctChange)}\n`
  );
};

export default DataFormatter;
