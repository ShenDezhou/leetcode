/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
	let stack = [];
	let max = 0;
	for (var i = 0; i < s.length - max; i++) {
		for (var j = i; j < s.length; j++) {
			if (!stack.includes(s[j])) {
				stack.push(s[j]);
				if (max < stack.length) max = stack.length;

			} else {
				if (max > s.length - i - 1) return max;
				stack.length = 0;
				break;
			}
		}
	}
	return max;

};