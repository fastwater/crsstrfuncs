// crsstrfuncs.js
function hasBackStr(str) {
    return str.split('').some(function(char) {
        return str.includes(char + char.repeat(Math.max(str.split(char).length - 2, 0)) + char);
    });
}
 
module.exports = hasBackStr;