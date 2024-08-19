var lexer = function (input) {
    //check if input is empty ,otherwise return// char.trim() remove the white spca
    return input.split("").filter(function (char) { return char.trim() !== ""; });
};
var parser = function (token) {
    if (token.length === 2 && token[0] === "{" && token[1] === "}") {
        return true;
    }
    return false;
};
var validateJSOn = function (input) {
    var token = lexer(input);
    var isvalid = parser(token);
    if (isvalid) {
        console.log("valid json");
        process.exit(0);
    }
    else {
        console.error("invalid Json");
        process.exit(1);
    }
};
//testing with json string '{}'
var input = "{}";
validateJSOn(input);
