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
  lines.map(l => {
    let haunt = 1;
    let floor = 1;
    l.split(' ')
      .map(c => c === "UP" ? 1 : -1)
      .map(c => {
        floor = Math.max(1, floor + (c * haunt));
        haunt *= -1;
      });
    return floor;
  }).forEach(o => console.log(o));
}
