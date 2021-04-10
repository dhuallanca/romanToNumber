const romanNumbersMap = new Map([
  ["I", 1],
  ["V", 5],
  ["X", 10],
  ["L", 50],
  ["C", 100],
  ["D", 500],
  ["M", 1000]
]);
let previousRomanNumber = '';

const convertRomanNumberToInteger = (romanNumber) => {
  if (!romanNumber) return console.error('Invalid roman number');

  const initialValue = 0;
  const numberConverted = romanNumber.split('').reduce(reducer, initialValue);
  console.log(`${romanNumber} equals to ${numberConverted}`);
}

const reducer = (total, currentRomanNumber) => {
  const equivalentNumber = getEquilaventNumberWithExceptions(previousRomanNumber, currentRomanNumber);
  previousRomanNumber = currentRomanNumber;
  return total + equivalentNumber;
}

const getEquilaventNumberWithExceptions = (previousRomanNumber, currentRomanNumber) => {
  switch (previousRomanNumber) {
    case 'I':
      if (currentRomanNumber === 'V') {
        return 4 - getNumericalValue(previousRomanNumber);
      } else if (currentRomanNumber === 'X') {
        return 9 - getNumericalValue(previousRomanNumber);
      }
    case 'X':
      if (currentRomanNumber === 'L') {
        return 40 - getNumericalValue(previousRomanNumber);
      } else if (currentRomanNumber === 'C') {
        return 90 - getNumericalValue(previousRomanNumber);
      }
    case 'C':
      if (currentRomanNumber === 'D') {
        return 400 - getNumericalValue(previousRomanNumber);
      } else if (currentRomanNumber === 'M') {
        return 900 - getNumericalValue(previousRomanNumber);
      }
    default:
      return getNumericalValue(currentRomanNumber);
  }
}

const getNumericalValue = (romanNumber) => {
  return romanNumbersMap.get(romanNumber);
}

convertRomanNumberToInteger('XIV');