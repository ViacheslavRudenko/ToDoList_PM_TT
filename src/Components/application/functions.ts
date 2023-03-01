export const cutString = (str: string) => {
    const maxLength = 10;
    if (str.length <= maxLength) {
        return str;
    } else {
        let lastSpaceIndex = str.lastIndexOf(" ", maxLength);
        if (lastSpaceIndex === -1) {
            return str.substring(0, maxLength);
        } else {
            return str.substring(0, lastSpaceIndex) + "...";
        }
    }
};