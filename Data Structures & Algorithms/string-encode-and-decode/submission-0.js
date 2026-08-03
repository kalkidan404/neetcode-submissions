class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded="";
        for(let word of strs){
          encoded+=word.length+"#"+word;
        }
        return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
    let decoded = [];
    let i = 0;

    while (i < str.length) {

        let length = "";

        // get the number before #
        while (str[i] !== "#") {
            length += str[i];
            i++;
        }

        let n = Number(length);

        // skip #
        i++;

        // get the word
        decoded.push(str.substring(i, i + n));

        // move to next word
        i += n;
    }

    return decoded;
}
}
