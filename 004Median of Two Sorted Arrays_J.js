/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
	var a = 0,
		b = nums1.length - 1;
	var x = 0,
		y = nums2.length - 1;
	if (y == -1) {
		a = Math.floor(b / 2);
		b -= Math.floor(b / 2);
		return (nums1[a] + nums1[b]) / 2;
	}
	if (b == -1) {
		x = Math.floor(y / 2);
		y -= Math.floor(y / 2);
		return (nums2[x] + nums2[y]) / 2;
	}


	for (var i = 0; i < Math.floor((b + y + 1) / 2); i++) {
		if (nums1[a] < nums2[x]) a++;
		else x++;
		if (nums1[b] > nums2[y]) b--;
		else y--;
	}
	if (a <= b && x <= y) return (nums1[a] + nums2[x]) / 2;
	if (a > b) return nums2[x];
	if (x > y) return nums1[a];
	return 0;

};