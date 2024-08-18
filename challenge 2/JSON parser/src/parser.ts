import { isValidJson } from "./lexer";

export function parseJson(input: string): void {
  if (isValidJson(input)) {
    console.log("Valid Json");
    process.exit(0);
  } else {
    console.error("Invalid JSON");
    process.exit(1);
  }
}
