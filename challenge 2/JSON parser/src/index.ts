const lexer = (input: string): string[] => {
  //check if input is empty ,otherwise return// char.trim() remove the white spca
  return input.split("").filter((char) => char.trim() !== "");
};

const parser = (token: string[]): boolean => {
  if (token.length === 2 && token[0] === "{" && token[1] === "}") {
    return true;
  }
  return false;
};

const validateJSOn = (input: string): void => {
  const token = lexer(input);

  const isvalid = parser(token);

  if (isvalid) {
    console.log("valid json");
    process.exit(0);
  } else {
    console.error("invalid Json");
    process.exit(1);
  }
};

//testing with json string '{}'

const input = "{}";
validateJSOn(input);
