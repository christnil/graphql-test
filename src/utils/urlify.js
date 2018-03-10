const array = "abcdefghijklmnopqrstuvxyz-_".split('');
const dictionary = {};
array.forEach(char => { dictionary[char] = char; });
dictionary[' '] = '-';

export default function urlify(input) {
  return input
    .toLowerCase()
    .split('')
    .map(char => dictionary[char])
    .filter(x => x)
    .join('');
}
