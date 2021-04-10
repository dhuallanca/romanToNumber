const { convertRomanNumberToInteger } = require('./roman-number-to-integer');
describe('convert roman to numerical', () => {

  test('should return invalid number', () => {
    expect(convertRomanNumberToInteger('')).toEqual('Invalid roman number');
  });

  test.each `
  romanNumber    | expected
  ${'XXI'} | ${21}
  ${'XIV'} | ${14}
  ${'XL'} | ${40}
  ${'XC'} | ${90}
  ${'LVIII'} | ${58}
  ${'MCXX'} | ${1120}
  ${'MIX'} | ${1009}
  ${'CDI'} | ${401}
  ${'CM'} | ${900}
  ${'IV'} | ${4}
  ${'IX'} | ${9}
  ${'XX'} | ${20}
  ${'XIV'} | ${14}
  ` ('roman $romanNumber to numerical equals $expected', ({ romanNumber, expected }) => {
    expect(convertRomanNumberToInteger(romanNumber)).toEqual(expected);
  });

});