export const capitalize = text => {
    return text?.toLowerCase()?.replace(/^./, char => char?.toUpperCase());
};