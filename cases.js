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
  const line = lines[0]

  if (line.lenth() === 0) {
    console.log(line);
  }

  for (line of lines) {
    if (isUppercase(line[0])) {
      printSpooky(line);
      continue;
    }
    let spookycase = true;
    for (int i = 1; i < line.length(); i++) {
      if (isUppercase(line[i]) && isUppercase(line[i-1])) {
        printSuper(line);
        break;
      }
    }
  }
  console.log([...line].map(Number).reduce((a, n) => a+n))
}

function isUppercase(char) {
  char.toUpperCase() === char;
}

function isLowercase(char) {
  char.toLowerCase() === char;
}

function isAlpha(char) {
  isUppercase(char) === isLowercase(char);
}

function printSpooky(line) {
  
}

function printSuper(line) {
  if (line.length() === 0) {
    console.log(line);
  }
  let buildString = "";
  buildString += line.charAt(0).toUpper;
  lowercaseWord = true;
  for (i = 1; i < line.length(); i++) {
    let char = line[i];
    if (!isAlpha(char)) {
      buildString += char;
      continue;
    }
    if (isUppercase(char) && lowercaseWord) {
      lowercaseWord = false;
      buildString += " " + i.toLowerCase();
    } else if (lowercaseWord) {
      // tbd
    }
  }


  return `${line.slice(0,1)}${line.slice(1)}`;
}
