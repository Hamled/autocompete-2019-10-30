const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

const lines = []
rl.on('line', (line) => lines.push(line));
rl.on('close', (line) => execute(lines));

function execute(lines) {
  const line = lines[0];
  console.log([...line].map(Number).reduce((a, n) => a+n))
}
