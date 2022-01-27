export const capitalize = text => {
    return text?.toLowerCase()?.replace(/^./, char => char?.toUpperCase());
};

export const doubleDigit = (number) => String(number).padStart(2, '0');