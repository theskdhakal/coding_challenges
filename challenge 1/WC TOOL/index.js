const fs = require("fs").promises;

// business logic
const countBytes = async () => {
  try {
    let data = await fs.stat("test.txt"); //stat gives the statics of particular file// fs is required to access the file
    console.log("Total number of bytes are:", data.size);
  } catch (error) {
    console.log(error);
  }
};

const countWords = async () => {
  try {
    let data = await fs.readFile("test.txt", "utf-8"); // readFile as its name suggest read the partifular file, its norm to give utf-8 character for normal rendering.

    let countWord = data.split(/\s+/).length; // considering non whitespace characters

    console.log("the number of word is:", countWord);
  } catch (error) {
    console.log(error);
  }
};

const countCharacters = async () => {
  try {
    let data = await fs.readFile("test.txt", "utf-8"); // readFile as its name suggest read the partifular file, its norm to give utf-8 character for normal rendering.

    let count = data.split("").length; // usually in js new line is started by \n, spliting using \n gives the arrray of count with lines and count.length gives the no of lines
    console.log("the number of characters is:", count);
  } catch (error) {
    console.log(error);
  }
};

const countLines = async () => {
  try {
    let data = await fs.readFile("test.txt", "utf-8"); // readFile as its name suggest read the partifular file, its norm to give utf-8 character for normal rendering.

    let count = data.split("\n").length; // usually in js new line is started by \n, spliting using \n gives the arrray of count with lines and count.length gives the no of lines
    console.log("the number of line is:", count);
  } catch (error) {
    console.log(error);
  }
};

let args = process.argv[2]; //[node path, file path, argument]
if (args == "-c") {
  countBytes();
} else if (args == "-l") {
  countLines();
} else if (args == "-w") {
  countWords();
} else if (args == "-m") {
  countCharacters();
} else {
  countBytes();
  countLines();
  countWords();
}
