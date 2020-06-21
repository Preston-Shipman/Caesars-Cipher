function rot13(str) {
  var newArr = [];
  for (i = 0; i < str.length; i++) {
    var newLetter = str.charCodeAt(i);
    if (newLetter >= 65 && newLetter <= 90) {
      newLetter -= 13;
      if (newLetter < 65) {
        newLetter += 26;
      }
    }

    newArr.push(String.fromCharCode(newLetter));
  }

  return newArr.join('');
}
