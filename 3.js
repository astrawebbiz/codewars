/*Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.*/
function longest(s1, s2) {
  let array1 = s1.split('');
  let array2 = s2.split('');
  let result = [...array1, ...array2];
  return Array.from(new Set(result)).sort().join('');
}