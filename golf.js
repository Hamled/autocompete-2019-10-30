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
  let ball = lines[0].match(/ball <(-?\d+),(-?\d+)>/).slice(1).map(Number);
  const hole = lines[1].match(/hole <(-?\d+),(-?\d+)>/).slice(1).map(Number);

  let n = 1;
  lines
    .slice(2)
    .map(l => l.match(/<(-?\d+),(-?\d+)>/).slice(1).map(Number))
    .forEach(pos => {
      ball[0] += pos[0];
      ball[1] += pos[1];
      if(ball[0] === hole[0] && ball[1] === hole[1]) {
        console.log(`Hole in ${n}`);
        return;
      }
      n++;
    });
}
