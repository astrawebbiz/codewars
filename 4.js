/*Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. 
The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.*/
function duplicateCount(text){
  let array = text.toLowerCase().split('');
  let obj = {};
  let tmp_obj = {};
  let result = 0;
  array.forEach((letter) => {
    tmp_obj = {};
    if (obj.hasOwnProperty(letter)) obj[letter]++;
    else {
      tmp_obj[letter] = 1;
      obj = { ...obj, ...tmp_obj };
    }
  });
  for (let key in obj) {
    if (obj[key] > 1) result++;
  }
  return result;
}