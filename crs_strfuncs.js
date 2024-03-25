// crs_strfuncs.js
function str_back(str) {
  return str === str.split('').reverse().join('');
}
 
module.exports = str_back;