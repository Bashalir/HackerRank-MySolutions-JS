function checkMagazine(magazine, note) {
  const noteSplited = note.split(' ');
  let wordFind = 0;

  noteSplited.forEach((word) => {
    const indexOfWord = magazine.indexOf(word);
    if (indexOfWord > -1) {
      wordFind++;
      const magazineSliced = `${magazine.slice(0, indexOfWord)} 
      ${magazine.slice(indexOfWord + word.length, magazine.length)}`;
      magazine = magazineSliced;
    }
  });

  return wordFind === noteSplited.length ? 'Yes' : 'No';
}

module.exports = checkMagazine;
