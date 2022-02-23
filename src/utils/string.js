export const capitalize = text => {
  return String(text || '')
    .toLowerCase()
    .replace(/^./, char => char.toUpperCase());
};

export const dashify = text => {
  return String(text || '')
    .toLowerCase()
    .replace(/[\s,.]+/gi, '-');
}

export const doubleDigit = (number) => String(number).padStart(2, '0');