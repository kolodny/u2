module.exports = parseArgs;

function parseArgs(arg) {
  var words = [];
  var index = 0;
  while (index < arg.length) {

    swallowSpaces();

    if (arg[index] === '"') {
      parseWords('"')
    } else if (arg[index] === "'") {
      parseWords("'")
    } else {
      parseWord();
    }


  }
  return words;

  function parseWords(quoteType) {
    index++;
    var startIndex = index;
    while (index < arg.length) {
      if (arg[index] === quoteType) break;
      if (arg[index] === '\\') index++;
      index++;
    }
    if (index >= arg.length) {
      throw new Error('unterminated ' + quoteType);
    }
    words.push(arg.substring(startIndex, index));
    index++;
  }

  function parseWord() {
    var startIndex = index;
    while(index < arg.length) {
      if (/\s/.test(arg[index])) break;
      index++;
    }
    words.push(arg.substring(startIndex, index));
  }

  function swallowSpaces() {
    if (/\s/.test(arg[index])) {
      do {
        index++;
      } while (/\s/.test(arg[index]));
    }
  }
}