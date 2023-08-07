/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    const result = [];
    let line = [];
    let lineLength = 0;

    for (const word of words) {
        if (lineLength + line.length + word.length > maxWidth) {
            const spacesToAdd = maxWidth - lineLength;
            let lineStr = '';

            if (line.length === 1) {
                lineStr = line[0] + ' '.repeat(spacesToAdd);
            } else {
                const spacesPerWord = Math.floor(spacesToAdd / (line.length - 1));
                const extraSpaces = spacesToAdd % (line.length - 1);

                for (let i = 0; i < line.length - 1; i++) {
                    lineStr += line[i] + ' '.repeat(spacesPerWord + (i < extraSpaces ? 1 : 0));
                }
                lineStr += line[line.length - 1];
            }

            result.push(lineStr);
            line = [];
            lineLength = 0;
        }

        line.push(word);
        lineLength += word.length;
    }

    // Handle the last line (left-justified)
    result.push(line.join(' ').padEnd(maxWidth, ' '));

    return result;
};
