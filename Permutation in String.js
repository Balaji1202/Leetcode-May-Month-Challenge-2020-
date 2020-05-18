/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
  if (s1.length > s2.length) {
    return false
  }
  let length = s2.length - s1.length + 1,
    s1Length = s1.length,
    s1Split = s1.split('').sort().join('');
  for (let i = 0; i < length; i++) {
    let s2Split = s2.slice(i, i + s1Length).split('').sort().join('');
    if (s2Split == s1Split) {
      return true;
    }
  }
  return false;
};
