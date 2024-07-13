/*Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.*/
function XO(str) {
  let array = str.split('');
  let countX = 0;
  let countO = 0;
  let result = false;
  array.forEach((letter) => {
    if (letter.toLowerCase() == 'x') countX++;
    if (letter.toLowerCase() == 'o') countO++;
  });
  if (countX == countO) result = true;
  return result;
}