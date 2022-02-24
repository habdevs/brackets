module.exports = function check(str, bracketsConfig) {
    const bracketArr = bracketsConfig.map(cur => cur.join(''));
    let bracketStr = str;
    while (true) {
        let input = bracketStr;
        for (let i = 0; i < bracketArr.length; i++) {
            bracketStr = bracketStr.replace(bracketArr[i], '');
        }
        if (input === bracketStr) break;
    }
    return !Boolean(bracketStr);
}