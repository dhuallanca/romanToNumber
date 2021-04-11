const { convertRomanNumberToInteger } = require('./roman-number-to-integer');
describe('convert roman to numerical', () => {

  test('should return invalid number when is empty', () => {
    expect(convertRomanNumberToInteger('')).toEqual('invalid roman number');
  });


  test.each `
  romanNumber    | expected
  ${'I'} | ${true}
  ${'XXI'} | ${true}
  ${'XIV'} | ${true}
  ${'XLB'} | ${false}
  ${'XC '} | ${false}
  ` ('should verify if roman $romanNumber match with regex, expected $expected', ({ romanNumber, expected }) => {
    const regex = /(?!\s)([M,D,C,L,X,V,I])+$/g;
    expect(regex.test(romanNumber)).toEqual(expected);
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
  ` ('should convert roman $romanNumber to numerical, expected $expected', ({ romanNumber, expected }) => {
    expect(convertRomanNumberToInteger(romanNumber)).toEqual(expected);
  });

});