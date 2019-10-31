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
  const n = Number(lines[0]);

  let i = 1;
  console.log(' '.repeat(n - i) + '*');
  let dollarCount = 1;
  while(i < n - 1) {
    console.log(' '.repeat(n - i - 1) + '*' + '$'.repeat(dollarCount) + '*');
    dollarCount += 2;
    i++;
  }
  console.log('*'.repeat(n * 2 - 1));
}
