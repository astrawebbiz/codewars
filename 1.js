/*In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.*/
function highAndLow(numbers){
  let array = numbers.split(' ');
  let min = array[0];
  let max = array[0];
  array.forEach((number) => {
    if (Number(number) < min) min = Number(number);
    if (Number(number) > max) max = Number(number);
  });
  return max.toString() + ' ' + min.toString();
}