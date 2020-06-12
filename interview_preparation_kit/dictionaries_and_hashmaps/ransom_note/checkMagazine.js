function checkMagazine(magazine, note) {
  const magazineSplited = magazine.split(' ');
  const noteSplited = note.split(' ');

  const result = noteSplited.every((word) => {
    if (magazineSplited.includes(word)) {
      magazineSplited.splice(magazineSplited.indexOf(word), 1);
      return true;
    }
    return false;
  });

  return result ? 'Yes' : 'No';
}

module.exports = checkMagazine;
