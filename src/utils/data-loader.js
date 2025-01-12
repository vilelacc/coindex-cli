// node core modules
import { readFileSync } from "fs";

const DataLoader = (path) => {
  return JSON.parse(readFileSync(new URL(path, import.meta.url)));
};

export default DataLoader;
