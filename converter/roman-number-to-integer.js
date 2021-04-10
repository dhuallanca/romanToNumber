const romanNumbersMap = new Map([
  ["I", 1],
  ["V", 5],
  ["X", 10],
  ["L", 50],
  ["C", 100],
  ["D", 500],
  ["M", 1000]
]);
let previousNumericalValue = 0;

const convertRomanNumberToInteger = (romanNumber) => {
  if (!romanNumber || romanNumber.trim().length < 1) return 'Invalid roman number';
  previousNumericalValue = 0;
  const initialValue = 0;
  const numberConverted = romanNumber.split('').reverse().reduce(reducer, initialValue);
  return numberConverted;
}

const reducer = (total, currentRomanNumber) => {
  const currentNumericalValue = getNumericalValue(currentRomanNumber);
  if (currentNumericalValue < previousNumericalValue) {
    total -= currentNumericalValue;
  } else {
    total += currentNumericalValue;
  }
  previousNumericalValue = currentNumericalValue;
  return total;
}

const getNumericalValue = (romanNumber) => {
  return romanNumbersMap.get(romanNumber);
}

module.exports = { convertRomanNumberToInteger }