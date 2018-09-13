/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
	var p = l1;
	var q = l2;
	var h = new ListNode(0);
	var c = h;
	var carry = 0;
	while (p != null || q != null) {
		var x = (p == null) ? 0 : p.val;
		var y = (q == null) ? 0 : q.val;
		c.val = (x + y + carry) % 10;
		carry = Math.floor((x + y + carry) / 10);
		if (p != null) p = p.next;
		if (q != null) q = q.next;
		if (p != null || q != null) {
			c.next = new ListNode(0);
			c = c.next;
		}
	}
	if (carry > 0) c.next = new ListNode(carry);
	return h;
};