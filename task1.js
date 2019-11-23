const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    const reversed = input.split("").reverse().join("");
    console.log(reversed);
});

