import chalk from "chalk";

const ErrorHandler = (code) => {
  const messages = {
    404: "Non-existent currency",
  };
  console.error(chalk.red.bold(messages[code] || "Invalid input data"));
};
export default ErrorHandler;
