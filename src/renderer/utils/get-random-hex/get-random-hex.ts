const HEX_REF = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
];

const getRandomHex = (size: number) => {
  const result = [];

  for (let n = 0; n < size; n += 1) {
    result.push(HEX_REF[Math.floor(Math.random() * 16)]);
  }

  return result.join('');
};

export default getRandomHex;
